const customer = require("./Models/customerModel");
const proprietor = require("./Models/proprietorModel");
const jwt = require("jsonwebtoken");

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
