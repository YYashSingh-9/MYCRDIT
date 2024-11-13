const express = require("express");
const userAuthController = require("../Controllers/UserAuthController");
const customerRouter = express.Router();

customerRouter
  .route("/signup-user")
  .post(userAuthController.customerAuthentication);

customerRouter
  .route("/verification-user")
  .get(userAuthController.customerVerification);

module.exports = customerRouter;
