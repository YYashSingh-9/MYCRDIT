const customer = require("../Models/customerModel");
const proprietor = require("../Models/proprietorModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Proprietor = require("../Models/proprietorModel");
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

exports.customerAuthentication = async (req, res, next) => {
  const data = await customer.create(req.body);

  if (!data) {
    return next(new Error("unable to create account, please retry"));
  }
  cookieAndToken(res, data, 200);
};

exports.customerVerification = async (req, res, next) => {
  const { contactNumber } = req.body;
  if (!contactNumber) next(new Error("Contact number is missing, retry."));

  const data = await customer.find({ contactNumber });

  cookieAndToken(res, data, 200);
};

exports.proprietorAuthentication = async (req, res, next) => {
  const data = await proprietor.create(req.body);

  if (!data) {
    next(new Error("Unable to create account, please retry"));
  }
  cookieAndToken(res, data, 200);
};

exports.proprietorVerification = async (req, res, next) => {
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
};
