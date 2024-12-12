const dotenv = require("dotenv");
const appError = require("../Utilities/appError");

const productionError = (err, req, res) => {
  console.log(err);
};

module.exports = (err, req, res, next) => {
  productionError(err, req, res);
};
