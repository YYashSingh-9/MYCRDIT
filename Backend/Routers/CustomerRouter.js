const express = require("express");
const userAuthController = require("../Controllers/UserAuthController");
const ScoreCountController = require("../Controllers/ScoreCountController");
const customerRouter = express.Router();

customerRouter
  .route("/signup-user")
  .post(userAuthController.customerAuthentication);

customerRouter
  .route("/verification-user")
  .post(userAuthController.customerVerification);

customerRouter.use(userAuthController.customerProtectMiddleware);
customerRouter
  .route("/update-customer-info")
  .post(userAuthController.updateUserInfo);
module.exports = customerRouter;

customerRouter
  .route("/get-my-crdit-score")
  .get(ScoreCountController.totalMycrditScore);
