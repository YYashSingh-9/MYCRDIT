const debtNote = require("../Models/noteModel");
const paidNote = require("../Models/paidNoteModel");
const catchAsync = require("../Utilities/catchAsync");

//Proprietor
exports.allRunningNotes_proprietor = catchAsync(async (req, res, next) => {
  const { propId } = req.body;

  if (!propId) return next(new Error("Proprietor Id missing"));

  const doc = await debtNote.find({ proprietorId: { $in: propId } });

  res.status(200).json({
    status: "Success",
    data: doc,
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
  const doc = await debtNote.findOneAndUpdate(
    { proprietorId: id },
    { cleared: true },
    {
      runValidators: true,
      new: true,
    }
  );
  //2. adding this to paidNoteModel

  res.status(200).json({
    status: "Success",
    data: doc,
  });
});

exports.createNoteMiddleware = (req, res, next) => {
  const doc = req.body;

  const dummyDoc1 = { ...doc };

  const dummydoc2 = { ...dummyDoc1, cleared: false, acceptanceStatus: false };

  req.body = dummydoc2;
  next();
};

//2. CUSTOMER
exports.acceptingNoteMiddleware = catchAsync(async (req, res, next) => {});
