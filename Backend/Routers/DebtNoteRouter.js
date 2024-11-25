const express = require("express");
const NoteRouter = express.Router();
const NotesController = require("../Controllers/NotesController");
const UserAuthController = require("../Controllers/UserAuthController");

NoteRouter.route("/get-all-notes").get(
  NotesController.allRunningNotes_proprietor
);

module.exports = NoteRouter;
