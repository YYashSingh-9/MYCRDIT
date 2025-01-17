const express = require("express");
const NoteRouter = express.Router();
const NotesController = require("../Controllers/NotesController");
const UserAuthController = require("../Controllers/UserAuthController");

//PROPRIETOR NOTE ROUTES...
NoteRouter.route("/get-all-notes").get(
  UserAuthController.protect,
  NotesController.allRunningNotes_proprietor
);

NoteRouter.route("/get-all-cleared-notes").get(
  UserAuthController.protect,
  NotesController.allClearedNotes
);
NoteRouter.route("/create-note").post(
  UserAuthController.protect,
  NotesController.createNoteMiddleware,
  NotesController.createNote
);

NoteRouter.route("/note-payment").post(
  UserAuthController.protect,
  NotesController.paidNotePre_Controller,
  NotesController.notePaidController
);

//CUSTOMER NOTE ROUTES..

//1. Check requests.
NoteRouter.route("/note-approval-request").patch(
  UserAuthController.customerProtectMiddleware,
  NotesController.acceptingNoteMiddleware
);

//2. Running debts.
NoteRouter.route("/all-pending-notes").get(
  UserAuthController.customerProtectMiddleware,
  NotesController.getAllPendingNotes
);

//3. Check history.
NoteRouter.route("/all-cleared-notes").get(
  UserAuthController.customerProtectMiddleware,
  NotesController.getAllClearedNotes
);
module.exports = NoteRouter;
