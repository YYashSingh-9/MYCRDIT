const dotenv = require("dotenv");
const appError = require("../Utilities/appError");

const productionError = (err, req, res) => {
  console.log(err);
};

module.exports = (err, req, res, next) => {
  const error = JSON.parse(JSON.stringify(err));
  productionError(error, req, res);
};
