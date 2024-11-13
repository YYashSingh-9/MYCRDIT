const customer = require("../Models/customerModel");
const proprietor = require("../Models/proprietorModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
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
    status: "Success",
    data: user,
    token,
  });
};

exports.customerVerification = async (req, res, next) => {
  const data = await customer.create(req.body);

  if (!data) {
    return next(new Error("unable to create account"));
  }
  cookieAndToken(res, data, 200);
};

exports.proprietorAuthentication = async (req, res, next) => {
  const data = await proprietor.create(req.body);
};
