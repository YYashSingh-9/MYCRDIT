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

customerRouter
  .route("/get-my-crdit-score")
  .get(ScoreCountController.totalMycrditScore);

//CUSTOMER NOTE ROUTES..

//1. Check requests.
customerRouter
  .route("/note-approval-request")
  .patch(
    userAuthController.customerProtectMiddleware,
    NotesController.acceptingNoteMiddleware
  );

//2. Running debts.
customerRouter
  .route("/all-pending-notes")
  .get(
    userAuthController.customerProtectMiddleware,
    NotesController.getAllPendingNotes
  );

//3. Check history.
customerRouter
  .route("/all-cleared-notes")
  .get(
    userAuthController.customerProtectMiddleware,
    NotesController.getAllClearedNotes
  );

customerRouter
  .route("/get-my-crdit-score")
  .get(
    userAuthController.customerProtectMiddleware,
    ScoreCountController.totalMycrditScore
  );

module.exports = customerRouter;
