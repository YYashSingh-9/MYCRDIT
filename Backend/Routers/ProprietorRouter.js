const express = require("express");
const userAuthController = require("../Controllers/UserAuthController");
const ProprietorReviewController = require("../Controllers/ProprietorReviewController");
const functionalController = require("../Controllers/FunctionalControllers");
const NotesController = require("../Controllers/NotesController");
const ScoreCountController = require("../Controllers/ScoreCountController");

const proprietorRouter = express.Router();

proprietorRouter // signup
  .route("/proprietor-authentication")
  .post(userAuthController.proprietorAuthentication);

proprietorRouter // login
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

// Proprietor debt notes routes
proprietorRouter
  .route("/get-all-notes")
  .get(NotesController.allRunningNotes_proprietor);

proprietorRouter
  .route("/get-all-cleared-notes")
  .get(NotesController.allClearedNotes);

proprietorRouter
  .route("/create-note")
  .post(NotesController.createNoteMiddleware, NotesController.createNote);

// Transactional credit score count here..
proprietorRouter
  .route("/note-payment")
  .post(
    ScoreCountController.transactionalCreditScore_Count,
    NotesController.notePaidController
  );
proprietorRouter.route("/delete-note").patch(NotesController.deleteNote);

proprietorRouter
  .route("/get-all-specific-customer-notes")
  .post(NotesController.getAllSpecific_CustomerNotes);
