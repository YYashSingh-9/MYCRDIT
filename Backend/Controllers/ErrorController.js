const dotenv = require("dotenv");
const appError = require("../Utilities/appError");

const productionError = (err, req, res) => {
  console.log(err);

  res.status(err.statusCode).json({
    status: "Fail",
    data: err,
    message: err.message,
    errorName: err.name,
  });
};

module.exports = (err, req, res, next) => {
  const error = JSON.parse(JSON.stringify(err));
  error.message = error.message || "Failed request";
  error.statusCode = error.statusCode || 500;
  productionError(error, req, res);
};
