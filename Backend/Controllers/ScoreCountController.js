const appError = require("../Utilities/appError");
const catchAsync = require("../Utilities/catchAsync");
const DebtNote = require("../Models/noteModel");
const Customer = require("../Models/customerModel");
const PaidNote = require("../Models/paidNoteModel");

exports.transactionalCreditScore_Count = catchAsync(async (req, res, next) => {
  // console.log("Function Started from here... ✅");

  let pre_score_count = 0;
  let seconds, minutes, hours, days, _ThirtyDays, _FortyDays, within_FortyDays;
  let thirtyDayDuration = 30;
  let fortyDayDuration = 40;

  if (!req.body.debtNote_Id) {
    next(new appError("Error from client side note id missing.", 400));
  }

  //1. Extract debt note id,customer number to find this note & customer  .
  //a).
  const note_Id = req.body.debtNote_Id;
  const customerNumber = req.body.customerNumber;
  // console.log("note id", note_Id);
  //b).
  const note_ = await DebtNote.findById(note_Id);
  const cust = await Customer.find({
    contactNumber: { $in: customerNumber },
  });
  const customer = cust[0];
  // console.log("NOTE AND CUSTOMER-> ", note_, customer);

  //2. Extract amount and payment duration.
  // a) Amount
  const note_amount = note_.amount;
  // console.log("NOTE AMOUNT HERE ->", note_amount);
  // b) Payment duration.
  const written_NoteDate = new Date(note_.date);
  // console.log("WRITTEN NOTE DATE ->", written_NoteDate);

  //___
  const paymentDate = new Date(req.body.paymentDate);
  // console.log("PAYMENT DATE ->", paymentDate);

  //___
  // Time in milliseconds

  const totalPaymentDuration_ms = paymentDate - written_NoteDate;
  seconds = parseInt(Math.round(totalPaymentDuration_ms / 1000));
  minutes = parseInt(Math.round(seconds / 60));
  hours = parseInt(Math.round(minutes / 60));
  days = parseInt(Math.round(hours / 24));

  // console.log("TOTAL PAYMENT IN MS -> ", totalPaymentDuration_ms);
  const lengthOfPayment = days;
  const thirtyDayPayment =
    lengthOfPayment > 20 && lengthOfPayment < 30 ? true : false;
  // console.log("LENGTH OF PAYMENT IN DAYS -> ", lengthOfPayment);

  // Sorting payment duration in category.

  if (lengthOfPayment < thirtyDayDuration) {
    _ThirtyDays = true;
  }
  if (lengthOfPayment === thirtyDayDuration) {
    _ThirtyDays = true;
  }
  if (
    lengthOfPayment > thirtyDayDuration &&
    lengthOfPayment < fortyDayDuration
  ) {
    within_FortyDays = true;
  }
  if (lengthOfPayment > fortyDayDuration) {
    _FortyDays = true;
  }

  //3. Forwarding amount to filter brackets & giving score point as per.

  if (note_amount <= 500 && _ThirtyDays) {
    pre_score_count += 0.1;
    console.log("this is 1");
    console.log(pre_score_count);
  } else if (note_amount > 500 && note_amount < 2000 && _ThirtyDays) {
    console.log("this is 2");
    pre_score_count += 0.1;
  } else if (note_amount > 2000 && note_amount < 5000 && _ThirtyDays) {
    pre_score_count += 0.2;
    console.log("this is 3");
  } else if (note_amount > 5000 && note_amount < 9000 && _ThirtyDays) {
    pre_score_count += 0.3;
    console.log("this is 4");
  } else if (note_amount > 9000 && note_amount < 15000 && _ThirtyDays) {
    pre_score_count += 0.4;
    console.log("this is 5");
  } else if (note_amount > 15000 && note_amount < 25000 && _ThirtyDays) {
    pre_score_count += 0.6;
    console.log("this is 5");
  } else if (note_amount > 25000 && note_amount < 35000 && _ThirtyDays) {
    pre_score_count += 1;
    console.log("this is 6");
  } else if (note_amount > 35000 && _ThirtyDays) {
    pre_score_count += 2;
    console.log("this is 7");
  } else if (_FortyDays) {
    pre_score_count -= -0.1;
    console.log("this is 8");
  } else if (within_FortyDays) {
    pre_score_count += 0.05;
    console.log("this is 9");
  }

  // 4. Extract current customer's transactional Score & add new calculated score to that.
  const customerPreviousTScore = customer.transactionalScore;
  const customerCurrentTotal_TScore = customerPreviousTScore + pre_score_count;
  console.log(customer, customerPreviousTScore, customerCurrentTotal_TScore);
  const doc = await Customer.findOneAndUpdate(
    { contactNumber: customer.contactNumber },
    { transactionalScore: customerCurrentTotal_TScore },
    {
      runValidators: true,
      new: true,
    }
  );

  const dummyObj = {
    debtNote_Id: note_Id,
    customerNumber: customerNumber,
    paymentDate: paymentDate,
    thirtyDayPayment: thirtyDayPayment,
    lengthOfDebt: lengthOfPayment,
  };
  req.body = dummyObj;
  // console.log(doc);
  next();
});

exports.totalMycrditScore = catchAsync(async (req, res, next) => {
  if (!req.body.customerNumber) {
    return next(new appError("Customer number is missing.", 404));
  }
  const customerNum = req.body.customerNumber;
  //1. Calculate " Behavioural credit score ".

  const allPaidNotes = await PaidNote.find({
    customerNumber: { $in: customerNum },
  });
});
