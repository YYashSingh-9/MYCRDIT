const express = require("express");
const NoteRouter = express.Router();
const NotesController = require("../Controllers/NotesController");
const UserAuthController = require("../Controllers/UserAuthController");

NoteRouter.route("/get-all-notes").get(
  UserAuthController.protect,
  NotesController.allRunningNotes_proprietor
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
NoteRouter.route("/note-approval-request").patch(
  UserAuthController.protect,

  NotesController.acceptingNoteMiddleware
);
module.exports = NoteRouter;
