const express = require("express");
const userAuthController = require("../Controllers/UserAuthController");
const ProprietorReviewController = require("../Controllers/ProprietorReviewController");
const proprietorRouter = express.Router();

proprietorRouter
  .route("/proprietor-authentication")
  .post(userAuthController.proprietorAuthentication);

proprietorRouter
  .route("/proprietor-verification")
  .get(userAuthController.proprietorVerification);
proprietorRouter.use(userAuthController.protect);

proprietorRouter.use(userAuthController.protect);
proprietorRouter
  .route("/share-your-review")
  .post(ProprietorReviewController.createReview);
module.exports = proprietorRouter;
