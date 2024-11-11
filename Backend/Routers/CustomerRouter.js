const express = require("express");
const userAuthController = require("../Controllers/UserAuthController");
const customerRouter = express.Router();

customerRouter
  .route("/signup-user")
  .post(userAuthController.customerAuthentication);

module.exports = customerRouter;
