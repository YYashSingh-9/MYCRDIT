const express = require("express");
const userAuthController = require("../Controllers/UserAuthController");
const ProprietorReviewController = require("../Controllers/ProprietorReviewController");
const functionalController = require("../Controllers/FunctionalControllers");
const proprietorRouter = express.Router();

proprietorRouter
  .route("/proprietor-authentication")
  .post(userAuthController.proprietorAuthentication);

proprietorRouter
  .route("/proprietor-verification")
  .post(userAuthController.proprietorVerification);
proprietorRouter.use(userAuthController.protect);

// Authorized accessible routes.
proprietorRouter.use(userAuthController.protect);
proprietorRouter
  .route("/share-your-review")
  .post(ProprietorReviewController.createReview);

proprietorRouter
  .route("/edit-proprietor")
  .post(userAuthController.updateUserInfo);

proprietorRouter
  .route("/edit-proprietor-shop")
  .patch(functionalController.updateShopInfo);
module.exports = proprietorRouter;
