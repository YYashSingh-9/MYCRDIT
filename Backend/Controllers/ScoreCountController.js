const appError = require("../Utilities/appError");
const catchAsync = require("../Utilities/catchAsync");
const DebtNote = require("../Models/noteModel");
const Customer = require("../Models/customerModel");

exports.transactionalCreditScore_Count = catchAsync(async (req, res, next) => {
  let pre_score_count = 0;
  let _ThirtyDays, _FortyDays, within_FortyDays;

  if (!req.body.debtNote_Id) {
    next(new appError("Error from client side note id missing.", 400));
  }

  //1. Extract debt note id,customer number to find this note & customer  .
  //a).
  const note_Id = req.body.debtNote_Id;
  //b).
  const note_ = await DebtNote.findById(note_Id);
  const customer = await Customer.find({
    contactNumber: { $in: customer.contactNumber },
  });

  //2. Extract amount and payment duration.
  // a) Amount
  const note_amount = note_.amount;
  // b) Payment duration.
  const written_NoteDate = new Date(note_.date);
  //___
  const now = new Date();
  const nowIso = now.toISOString();
  const currentTimeInMS = Date.parse(nowIso);
  //___
  //30 days in milliseconds
  const thirtyDayMs = 1000 * 60 * 60 * 24 * 30; //86400000*30 = 2592000000(30 day ms);
  const fortyDayMs = 1000 * 60 * 60 * 24 * 40; // 3456000000 (40 day ms);
  const totalPaymentDuration_ms = currentTimeInMS - written_NoteDate;

  // Sorting payment duration in category.
  totalPaymentDuration_ms < thirtyDayMs && _ThirtyDays === true;
  totalPaymentDuration_ms === thirtyDayMs && _ThirtyDays === true;
  totalPaymentDuration_ms > thirtyDayMs &&
    totalPaymentDuration_ms < fortyDayMs &&
    within_FortyDays === true;
  totalPaymentDuration_ms > fortyDayMs && _FortyDays === true;

  //3. Forwarding amount to filter brackets & giving score point as per.

  if (note_amount <= 500 && _ThirtyDays) {
    pre_score_count += 0.1;
  } else if (note_amount > 500 && note_amount < 2000 && _ThirtyDays) {
    pre_score_count += 0.1;
  } else if (note_amount > 2000 && note_amount < 5000 && _ThirtyDays) {
    pre_score_count += 0.2;
  } else if (note_amount > 5000 && note_amount < 9000 && _ThirtyDays) {
    pre_score_count += 0.3;
  } else if (note_amount > 9000 && note_amount < 15000 && _ThirtyDays) {
    pre_score_count += 0.4;
  } else if (note_amount > 15000 && note_amount < 25000 && _ThirtyDays) {
    pre_score_count += 0.6;
  } else if (note_amount > 25000 && note_amount < 35000 && _ThirtyDays) {
    pre_score_count += 1;
  } else if (note_amount > 35000 && _ThirtyDays) {
    pre_score_count += 2;
  } else if (_FortyDays) {
    pre_score_count -= -0.1;
  } else if (within_FortyDays) {
    pre_score_count += 0.05;
  }

  // 4. Extract current customer's transactional Score & add new calculated score to that.
  const customerPreviousTScore = customer.transactionalScore;
  const customerCurrentTotal_TScore = customerPreviousTScore + pre_score_count;
  const doc = await Customer.findOneAndUpdate(
    { contactNumber: customer.contactNumber },
    { transactionalScore: customerCurrentTotal_TScore },
    {
      runValidators: true,
      new: true,
    }
  );

  next();
});
