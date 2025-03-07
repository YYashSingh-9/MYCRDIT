const express = require("express");
const userAuthController = require("../Controllers/UserAuthController");
const ProprietorReviewController = require("../Controllers/ProprietorReviewController");
const functionalController = require("../Controllers/FunctionalControllers");
const NotesController = require("../Controllers/NotesController");

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
proprietorRouter;
proprietorRouter
  .route("/get-all-notes")
  .get(NotesController.allRunningNotes_proprietor);

proprietorRouter;
proprietorRouter
  .route("/get-all-cleared-notes")
  .get(NotesController.allClearedNotes);
proprietorRouter;
proprietorRouter
  .route("/create-note")
  .post(NotesController.createNoteMiddleware, NotesController.createNote);
