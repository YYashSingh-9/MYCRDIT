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
  const { debtNote_Id } = req.body;

  if (!debtNote_Id)
    return next(new Error("Some credentials are missing, retry."));

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

  const date_old_ms = date_Old.getMilliseconds();
  const date_New_ms = date_New.getMilliseconds();

  console.log("First log -> Dates", date_Old, date_New);

  //3.
  const totalMilliseconds = date_New - date_Old;
  seconds = parseInt(Math.floor(totalMilliseconds / 1000));
  minutes = parseInt(Math.floor(seconds / 60));
  hours = parseInt(Math.floor(minutes / 60));
  days = parseInt(Math.floor(hours / 24));

  console.log("Log-> 2 timelines ", seconds, minutes, hours, days);

  const lengthOfPayment = days;
  const thirtyDayPayment = lengthOfPayment <= 30 ? true : false;

  console.log("log-> 3", lengthOfPayment, thirtyDayPayment);

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

  const dummyDoc1 = { ...doc };

  const dummydoc2 = { ...dummyDoc1, cleared: false, acceptanceStatus: false };

  req.body = dummydoc2;
  next();
};

//2. CUSTOMER
exports.acceptingNoteMiddleware = catchAsync(async (req, res, next) => {});
