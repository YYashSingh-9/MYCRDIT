const debtNote = require("../Models/noteModel");
const paidNote = require("../Models/paidNoteModel");
const catchAsync = require("../Utilities/catchAsync");
const appError = require("../Utilities/appError");

//Proprietor
exports.allRunningNotes_proprietor = catchAsync(async (req, res, next) => {
  const { _id: propId } = req.user;

  if (!propId) return next(new appError("Proprietor Id missing", 400));

  const doc = await debtNote.find({ proprietorId: { $in: propId } });
  console.log(doc);
  res.status(200).json({
    status: "Success",
    data: doc,
  });
});

exports.allClearedNotes = catchAsync(async (req, res, next) => {
  const { proprietorId } = req.body;

  if (!proprietorId)
    return next(
      new appError("Proprietor Id id missing from client side, retry.", 400)
    );

  const doc = await debtNote.find({
    proprietorId: { $in: proprietorId },
    cleared: { $in: true },
  });

  res.status(200).json({
    status: "Success",
    data: doc,
  });
});

// THIS IS MAIN CREATE NOTE
exports.createNote = catchAsync(async (req, res, next) => {
  if (!req.body)
    return next(
      new appError("Content required to create note is missing, retry.", 400)
    );

  const doc = await debtNote.create(req.body);
  res.status(200).json({
    status: "Success",
    data: doc,
  });
});

exports.notePaidController = catchAsync(async (req, res, next) => {
  const { debtNote_Id } = req.body;

  if (!debtNote_Id)
    return next(new appError("Some credentials are missing, retry.", 400));

  //1. changing cleared status.
  const doc = await debtNote.findOneAndUpdate(
    { proprietorId: debtNote_Id },
    { cleared: true },
    {
      runValidators: true,
      new: true,
    }
  );
  //2. adding this to paidNoteModel.
  const doc2 = await paidNote.create(req.body);

  res.status(200).json({
    status: "Success",
    data: doc2,
  });
});

exports.paidNotePre_Controller = catchAsync(async (req, res, next) => {
  const { paymentDate, debtNote_Id, customerNumber } = req.body;
  let seconds, minutes, hours, days;

  //1.
  const doc = await debtNote.findById(debtNote_Id);

  //2.
  const date_Old = new Date(doc.date); // Date of note creation
  const date_New = new Date(paymentDate); // Date of payment

  //3.
  const totalMilliseconds = date_New - date_Old;
  seconds = parseInt(Math.round(totalMilliseconds / 1000));
  minutes = parseInt(Math.round(seconds / 60));
  hours = parseInt(Math.round(minutes / 60));
  days = parseInt(Math.round(hours / 24));

  const lengthOfPayment = days;
  const thirtyDayPayment = lengthOfPayment <= 30 ? true : false;

  const dummyObj = {
    debtNote_Id: debtNote_Id,
    customerNumber: customerNumber,
    paymentDate: paymentDate,
    thirtyDayPayment: thirtyDayPayment,
    lengthOfDebt: lengthOfPayment,
  };

  req.body = dummyObj;
  next();
});

exports.createNoteMiddleware = (req, res, next) => {
  const doc = req.body;
  if (!doc) return next(new appError("Content from client side missing", 400));
  const dummyDoc1 = { ...doc };

  // Client must accept this note first, after that acceptanceStatus : true
  const dummydoc2 = {
    ...dummyDoc1,
    cleared: false,
    acceptanceStatus: false,
    deleted: false,
  };

  req.body = dummydoc2;
  next();
};

exports.deleteNote = catchAsync(async (req, res, next) => {
  const { noteId } = req.body;
  if (!noteId) {
    return next(
      new appError("Error occured while deleting, something missing", 404)
    );
  }

  const data = await debtNote.findOneAndUpdate(
    { _id: noteId },
    { deleted: true },
    { runValidators: true, new: true }
  );

  res.status(200).json({
    status: "Success",
    data: data,
  });
});

//2. CUSTOMER
exports.acceptingNoteMiddleware = catchAsync(async (req, res, next) => {
  const { noteId } = req.body;

  if (!noteId)
    return next(new appError("Some error occured please try again", 400));

  const doc = await debtNote.findOneAndUpdate(
    { _id: noteId },
    { acceptanceStatus: true },
    {
      runValidators: true,
      new: true,
    }
  );

  res.status(200).json({
    status: "Success",
    data: doc,
  });
});

exports.getAllPendingNotes = catchAsync(async (req, res, next) => {
  const { customerNumber, requestFor } = req.body;

  if (!customerNumber)
    return next(
      new Error(
        "Some error occured while checking data from user side, check and retry."
      )
    );

  //1. All accepted but not paid notes.
  const doc = await debtNote.find({
    customerNumber: { $in: customerNumber },
    cleared: { $in: false },
    acceptanceStatus: { $in: true },
  });

  //2. All not accepted and not paid notes.
  const doc2 = await debtNote.find({
    customerNumber: { $in: customerNumber },
    acceptanceStatus: { $in: false },
  });

  const finalDoc = requestFor === "accepted notes" ? doc : doc2;

  res.status(200).json({
    status: "Success",
    data: finalDoc,
  });
});

//History..
exports.getAllClearedNotes = catchAsync(async (req, res, next) => {
  const { customerNumber } = req.body;

  if (!customerNumber)
    return next(
      new appError("Customer number missing from client side, retry.", 400)
    );
  const doc = await debtNote.find({
    customerNumber: { $in: customerNumber },
    cleared: { $in: true },
  });

  res.status(200).json({
    status: "Success",
    data: doc,
  });
});

// Get All notes of a specific customer

exports.getAllSpecific_CustomerNotes = catchAsync(async (req, res, next) => {
  const { customerNumber } = req.body;
  console.log(req.body);
  if (!customerNumber)
    return next(new appError("Customer number missing", 404));

  const data = await debtNote.find({
    customerNumber: { $in: customerNumber },
  });

  res.status(200).json({
    status: "Success",
    data: data,
  });
});
