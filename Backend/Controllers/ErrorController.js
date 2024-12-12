const dotenv = require("dotenv");
const appError = require("../Utilities/appError");

// Specific production error handlers
const validationError = (error) => {
  const message = Object.values(error.errors).map((el) => el.message);
  return new appError(message, 500);
};

const developmentError = (err, req, res) => {
  console.log(err);

  res.status(err.statusCode).json({
    status: "Fail",
    data: err,
    message: err.message,
    errorName: err.name,
  });
};

const productionError = (err, req, res) => {
  if (req.originalUrl.startsWith("/mycrdit")) {
    if (err.isOperational) {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }
  }

  return res.status(500).json({
    status: "Fail",
    message: "Failed request.",
  });
};

module.exports = (err, req, res, next) => {
  const error = JSON.parse(JSON.stringify(err));
  error.message = error.message || "Failed request";
  error.statusCode = error.statusCode || 500;

  if (process.env.NODE_ENV === "development") {
    developmentError(error, req, res);
  }
  if (process.env.NODE_ENV === "production") {
    let err_or = { ...error };
    if (error.name === "ValidationError") err_or = validationError(err_or);
  }
};
