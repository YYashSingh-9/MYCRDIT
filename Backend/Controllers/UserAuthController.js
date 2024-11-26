const customer = require("../Models/customerModel");
const proprietor = require("../Models/proprietorModel");
const catchAsync = require("../Utilities/catchAsync");
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

exports.customerAuthentication = catchAsync(async (req, res, next) => {
  const data = await customer.create(req.body);

  if (!data) {
    return next(new Error("unable to create account, please retry"));
  }
  cookieAndToken(res, data, 200);
});

exports.customerVerification = catchAsync(async (req, res, next) => {
  const { contactNumber } = req.body;
  if (!contactNumber) next(new Error("Contact number is missing, retry."));

  const data = await customer.find({ contactNumber });

  cookieAndToken(res, data, 200);
});

exports.proprietorAuthentication = catchAsync(async (req, res, next) => {
  const data = await proprietor.create(req.body);

  if (!data) {
    next(new Error("Unable to create account, please retry"));
  }
  cookieAndToken(res, data, 200);
});

exports.proprietorVerification = catchAsync(async (req, res, next) => {
  const { contactNumber, password } = req.body;
  if (!contactNumber && password)
    return next(new Error("Credentials are missing."));

  const user = await proprietor.findOne({ contactNumber }).select("+password");
  console.log(user);
  if (!user) return next(new Error("Could not login. Try again later."));

  const pwCorrect = await user.correctPassword(password, user.password);
  if (!pwCorrect) return next(new Error("Password incorrect retry."));

  console.log(pwCorrect);
  cookieAndToken(res, user, 200);
});

//PROTECTION LAYER MIDDLEWARE FOR SPECIFIC ROUTES
exports.protect = catchAsync(async (req, res, next) => {
  console.log(req.headers);
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new Error("Can't indentify token, retry"));
  }
  // const decodedToken = await promisify(jwt.verify)(
  //   token,
  //   process.env.JWT_SECRET_CODE
  // );

  console.log(process.env.JWT_SECRET_CODE);
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_CODE);
  console.log(decodedToken);
  const user = await proprietor.findById(decodedToken.id);

  req.user = user;
  console.log(user, req.user);
  next();
});
