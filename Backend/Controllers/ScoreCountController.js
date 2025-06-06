const appError = require("../Utilities/appError");
const catchAsync = require("../Utilities/catchAsync");
const DebtNote = require("../Models/noteModel");
const Customer = require("../Models/customerModel");
const PaidNote = require("../Models/paidNoteModel");

//✅ THIS IS PROTOTYPE V 0.1 ✅//

/* Important terminology:-
 1. T block is array consisting 3 paid credit transactions objects.
 2. Month means 1 transaction will at least take 20 days to complete so it is around 30 days.
 3. Consecutive score means checking if a customer completed 2 t blocks(6 transactions/ 20 to 30 days each) consecutively 
    it is  important to check because this good payments will give him additional score.
 4.customerTScore is customer's transactional score.
 */

exports.transactionalCreditScore_Count = catchAsync(async (req, res, next) => {
  console.log("Function Started from here... ✅");

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

  //b).
  const note_ = await DebtNote.findById(note_Id);
  const cust = await Customer.find({
    contactNumber: { $in: customerNumber },
  });
  const customer = cust[0];

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
    lengthOfPayment > 20 && lengthOfPayment <= 30 ? true : false;
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
  } else if (note_amount > 500 && note_amount <= 2000 && _ThirtyDays) {
    pre_score_count += 0.1;
  } else if (note_amount > 2000 && note_amount <= 5000 && _ThirtyDays) {
    pre_score_count += 0.2;
  } else if (note_amount > 5000 && note_amount <= 9000 && _ThirtyDays) {
    pre_score_count += 0.3;
  } else if (note_amount > 9000 && note_amount <= 15000 && _ThirtyDays) {
    pre_score_count += 0.4;
  } else if (note_amount > 15000 && note_amount <= 25000 && _ThirtyDays) {
    pre_score_count += 0.6;
  } else if (note_amount > 25000 && note_amount <= 35000 && _ThirtyDays) {
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
  // console.log(customer, customerPreviousTScore, customerCurrentTotal_TScore);
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
  let updatedTBlockArray = [];
  let parentTBlockArray = [];
  let unclearedTblocks = [];
  let clearedTblocks = [];
  let consecutiveScore = 0;
  let minus_score = 0;
  let plus_score = 0;
  let totalScore = 0;

  console.log("FUNCTION STARTED FROM HERE -> ✅");
  console.log(req.body, "REQUEST BODY");

  if (!req.body.contactNumber) {
    return next(new appError("Customer number is missing.", 404));
  }
  const customerNum = req.body.contactNumber;
  //1. Calculate " Behavioural credit score ".

  // Step 1:- Getting customer & all t-blocks from array of transactions .
  const allPaidNotes = await PaidNote.find({
    customerNumber: { $in: customerNum },
  });
  const customerArr = await Customer.find({ contactNumber: customerNum });
  const customer = customerArr[0];
  console.log(customer, allPaidNotes.length, "CUSTOMER & NOTES HERE..");
  if (allPaidNotes.length < 100) {
    return next(
      new appError(
        "Could not get your total score, minimum of 100 paid transactions required.",
        404
      )
    );
  }

  for (let i = 0; i < allPaidNotes.length; i += 3) {
    parentTBlockArray.push(allPaidNotes.slice(i, i + 3));
  }
  // Step 2:- Run filter checks on each t-block and add cleared:true on cleared t-blocks
  // cleared:false on uncleared t-block.
  if (parentTBlockArray.length === 0) {
    return next(
      appError(
        "Error while calculating behvaioural credit score , error t-block array length ",
        404
      )
    );
  }

  // Adding cleared status;
  for (const child_Tblock of parentTBlockArray) {
    let allPaid = true;
    for (const obj of child_Tblock) {
      if (!obj.thirtyDayPayment) {
        allPaid = false;
      }
    }
    if (allPaid) {
      child_Tblock.push({ cleared: true });
      console.log("cleared");
    }
    if (!allPaid) {
      child_Tblock.push({ cleared: false });
    }
  }

  //Assigning it.
  updatedTBlockArray = [...parentTBlockArray];
  // console.log(updatedTBlockArray[0]);

  // Step 3:- Giving score on 2 consecutively cleared T-blocks (2 tblocks = 3+3 months = 6months 0r 6 transactions);

  for (let i = 0; i < updatedTBlockArray.length; i += 2) {
    let countOfTwo = 0;
    let oddCount = false;
    let dummyArr = [...parentTBlockArray];
    let setOfTwo = dummyArr.slice(i, i + 2);
    setOfTwo.forEach((el) => {
      let clearStatus = el.slice(-1);
      if (clearStatus[0].cleared) {
        countOfTwo += 1;
      }
      if (setOfTwo.length < 2 && clearStatus[0].cleared) {
        // this is for odd number of transaction counts
        oddCount = true;
      }
    });

    if (countOfTwo === 2) {
      let num = countOfTwo * 0.2;
      // console.log("jjjjjj");
      consecutiveScore = consecutiveScore + num;
    }
    if (oddCount === true) {
      // console.log("bdbd");
      consecutiveScore = consecutiveScore + 0.2;
    }
  }
  console.log("THIS IS SECOND", updatedTBlockArray[0]);
  //Step 4:- Filter out cleared and uncleared T-blocks;

  updatedTBlockArray.forEach((el) => {
    let clearStatus = el.slice(-1);
    if (clearStatus[0].cleared) {
      clearedTblocks.push(el);
    } else if (!clearStatus[0].cleared) {
      unclearedTblocks.push(el);
    }
  });

  console.log(
    "CLEARED AND UNCLEARED TBLOCKS -> ",
    clearedTblocks.length,
    unclearedTblocks.length
  );
  // Step 5:- Give score of addition of all cleared t-blocks and total addition of uncleared
  // t-blocks then deduct total of uncleared from cleared to get total score;

  plus_score = clearedTblocks.length * 0.2 + consecutiveScore;
  minus_score = unclearedTblocks.length * 0.1;

  totalScore = plus_score - minus_score;
  console.log(
    "PLUS SCORE & MINUS SCORE ->",
    plus_score,
    minus_score,
    "CONSECUTIVE SCORE -> ",
    clearedTblocks.length * 0.2,
    consecutiveScore
  );
  // Step 6:- Adding transactional Score with Behavioural score to get MyCrditScore.
  const customerTScore = customer.transactionalScore;
  const my_creditScore = customerTScore + totalScore;

  // console.log("FINAL SCORES", customer, my_creditScore);

  // Step 7:- Sending score details
  res.status(200).json({
    status: "Success",
    data: my_creditScore,
  });
});
