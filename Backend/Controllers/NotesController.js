const debtNote = require("../Models/noteModel");
const paidNote = require("../Models/paidNoteModel");
const catchAsync = require("../Utilities/catchAsync");

//Proprietor
const allRunningNotes_proprietor = catchAsync(async (req, res, next) => {
  const { propId } = req.body;

  if (!propId) return next(new Error("Proprietor Id missing"));

  const doc = debtNote.find({ proprietorId: { $in: propId } });

  res.status(200).json({
    status: "Success",
  });
});
