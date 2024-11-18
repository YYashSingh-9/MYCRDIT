const express = require("express");
const userAuthController = require("../Controllers/UserAuthController");
const proprietorRouter = express.Router();

proprietorRouter
  .route("/proprietor-authentication")
  .post(userAuthController.proprietorAuthentication);

proprietorRouter
  .route("/proprietor-verification")
  .get(userAuthController.proprietorVerification);

module.exports = proprietorRouter;