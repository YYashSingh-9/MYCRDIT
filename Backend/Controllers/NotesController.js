const debtNote = require("../Models/noteModel");
const paidNote = require("../Models/paidNoteModel");
const catchAsync = require("../Utilities/catchAsync");

const allRunningNotes = catchAsync(async () => {});
