const appError = require("../Utilities/appError");
const catchAsync = require("../Utilities/catchAsync");
const debtNote = require("../Models/noteModel");

exports.transactionalCreditScore_Count = catchAsync(async (req, res, next) => {
  let pre_score_count = 0;
  let _ThirtyDays, _FortyDays, within_FortyDays;

  if (!req.body.debtNote_Id) {
    next(new appError("Error from client side note id missing.", 400));
  }

  //1. Extracting debt note id and finding this note.
  //a).
  const note_Id = req.body.debtNote_Id;
  //b).
  const note_ = await debtNote.findById(note_Id);

  //2. Extracting amount and payment duration.
  // a) Amount
  const note_amount = note_.amount;
  // b) Payment duration.
  const written_NoteDate = new Date(note_.date);
  //___
  const now = new Date();
  const nowIso = now.toISOString();
  const currentTimeInMS = Date.parse(nowIso);
  // ___
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

  //3. Forwarding amount to filter brackets.

  if (note_amount <= 500) {
  } else if (note_amount > 500 && note_amount < 2000) {
  } else if (note_amount > 2000 && note_amount < 5000) {
  } else if (note_amount > 5000 && note_amount < 9000) {
  } else if (note_amount > 9000 && note_amount < 15000) {
  } else if (note_amount > 15000 && note_amount < 25000) {
  } else if (note_amount > 25000 && note_amount < 35000) {
  }
});
