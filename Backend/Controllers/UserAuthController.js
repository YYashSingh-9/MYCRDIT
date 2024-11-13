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
    expires: new Date(),
  };
  res.cookie("jwt", token);
};

exports.customerAuthentication = async (req, res, next) => {
  const data = await customer.create(req.body);

  if (!data) {
    return next(new Error("unable to create account"));
  }

  res.status(200).json({
    status: "Success",
    data: data,
  });
};

exports.proprietorAuthentication = async (req, res, next) => {
  const data = await proprietor.create(req.body);
};
