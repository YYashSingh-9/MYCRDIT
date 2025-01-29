const appError = require("../Utilities/appError");
const catchAsync = require("../Utilities/catchAsync");
const debtNote = require("../Models/noteModel");

exports.transactionalCreditScore_Count = catchAsync(async (req, res, next) => {
  if (!req.body.debtNote_Id) {
    next(new appError("Error from client side note id missing.", 400));
  }

  //1. Extracting debt note id and finding this note.
  //a).
  const note_Id = req.body.debtNote_Id;
  //b).
  const note_ = await debtNote.findById(note_Id);
});
