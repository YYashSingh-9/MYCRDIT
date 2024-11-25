const debtNote = require("../Models/noteModel");
const paidNote = require("../Models/paidNoteModel");
const catchAsync = require("../Utilities/catchAsync");

//Proprietor
exports.allRunningNotes_proprietor = catchAsync(async (req, res, next) => {
  const { propId } = req.body;

  if (!propId) return next(new Error("Proprietor Id missing"));

  const doc = debtNote.find({ proprietorId: { $in: propId } });

  res.status(200).json({
    status: "Success",
  });
});

exports.createNote = catchAsync(async (req, res, next) => {
  if (!req.body)
    return next(
      new Error("Content required to create note is missing, retry.")
    );

  const doc = await debtNote.create(req.body);
  res.status(200).json({
    status: "Success",
    data: doc,
  });
});

exports.notePaidController = catchAsync(async (req, res, next) => {
  const { id } = req.body;

  if (!id) return next(new Error("Some credentials are missing, retry."));

  //1.
  const note = await debtNote.findOneAndUpdate(
    { _id: id },
    { cleared: True },
    {
      runValidators: True,
      new: True,
    }
  );
});
