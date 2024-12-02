const express = require("express");
const NoteRouter = express.Router();
const NotesController = require("../Controllers/NotesController");
const UserAuthController = require("../Controllers/UserAuthController");

NoteRouter.use(UserAuthController.protect);

NoteRouter.route("/get-all-notes").get(
  NotesController.allRunningNotes_proprietor
);

NoteRouter.route("/create-note").post(
  NotesController.createNoteMiddleware,
  NotesController.createNote
);

NoteRouter.route("/note-payment").post(
  NotesController.paidNotePre_Controller,
  NotesController.notePaidController
);
NoteRouter.route("/note-approval-request").patch(
  NotesController.acceptingNoteMiddleware
);
module.exports = NoteRouter;
