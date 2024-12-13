const customer = require("../Models/customerModel");
const proprietor = require("../Models/proprietorModel");
const catchAsync = require("../Utilities/catchAsync");
const appError = require("../Utilities/appError");

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { promisify } = require("util");
dotenv.config({ path: "./config.env" });

//Helper functions..
const signtoken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET_CODE, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

const cookieAndToken = (res, user, statuscode) => {
  const token = signtoken(user.id);
  console.log(user.id, token);
  const cookieOptions = {
    httpOnly: true,
    sameSite: "none",
    expire: new Date(
      Date.now() + 24 * 60 * 60 * 1000 + process.env.JWT_EXPIRES_IN
    ),
  };

  if (process.env.NODE_ENV === "Production") cookieOptions.secure = true;
  res.cookie("jwt", token, cookieOptions);
  res.status(statuscode).json({
    status: "Successful request.",
    data: user,
    token,
  });
};

// CUSTOMER CONTROLLERS...
exports.customerAuthentication = catchAsync(async (req, res, next) => {
  const data = await customer.create(req.body);

  if (!data) {
    return next(new appError("unable to create account, please retry", 400));
  }
  cookieAndToken(res, data, 200);
});

exports.customerVerification = catchAsync(async (req, res, next) => {
  const { contactNumber } = req.body;
  if (!contactNumber) next(new Error("Contact number is missing, retry."));

  const data = await customer.findOne({ contactNumber });
  console.log(data);

  cookieAndToken(res, data, 200);
});

exports.updateUserInfo = catchAsync(async (req, res, next) => {
  let contact_number, name;
  //1. checking if user is proprietor
  if (req.userType === "Proprietor") {
    contact_number = req.body.contactNumber;
    name = req.body.ProprietorName;

    const doc = await proprietor.findByIdAndUpdate(
      req.user._id,
      {
        contactNumber: contact_number,
        ProprietorName: name,
      },
      { runValidators: true, new: true }
    );

    res.status(200).json({
      status: "Success",
      data: doc,
    });
  }

  //2. Checking if user is customer
  if (req.userType === "Customer") {
    console.log("running");
    contact_number = req.body.contactNumber;
    name = req.body.customerName;

    const doc = await customer.findByIdAndUpdate(
      req.user._id,
      {
        contactNumber: contact_number,
        customerName: name,
      },
      { runValidators: true, new: true }
    );

    res.status(200).json({
      status: "Success",
      data: doc,
    });
  }
});

// PROPRIETOR CONTROLLERS...
exports.proprietorAuthentication = catchAsync(async (req, res, next) => {
  const data = await proprietor.create(req.body);

  if (!data) {
    next(new appError("Unable to create account, please retry", 400));
  }
  cookieAndToken(res, data, 200);
});

exports.proprietorVerification = catchAsync(async (req, res, next) => {
  const { contactNumber, password } = req.body;
  if (!contactNumber && password)
    return next(new appError("Credentials are missing.", 400));

  const user = await proprietor.findOne({ contactNumber }).select("+password");
  if (!user)
    return next(new appError("Could not login. Try again later.", 400));

  const pwCorrect = await user.correctPassword(password, user.password);
  if (!pwCorrect) return next(new appError("Password incorrect retry.", 400));

  cookieAndToken(res, user, 200);
});

//PROTECTION LAYER MIDDLEWARE FOR SPECIFIC ROUTES
exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new appError("Can't indentify token, retry", 400));
  }

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_CODE);
  const user = await proprietor.findById(decodedToken.id);

  req.userType = "Proprietor";
  req.user = user;
  next();
});

exports.customerProtectMiddleware = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new appError("Can't indentify token, retry", 400));
  }
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_CODE);

  const user = await customer.findById(decodedToken.id);
  req.userType = "Customer";
  req.user = user;
  console.log(req.userType, req.user);
  next();
});
