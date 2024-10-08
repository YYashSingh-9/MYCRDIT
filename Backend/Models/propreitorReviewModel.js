const mongoose = require("mongoose");

const proprietorReviewSchema = mongoose.Schema({
  proprietorName: {
    type: String,
    required: [true, "Name required."],
  },
  brandName: {
    type: String,
    required: [true, "Provide Brand name"],
    minLength: [5, "Minimum 5 characters required."],
    maxLength: [30, "Maximum 30 characters reached."],
  },
  pincode: {
    type: Number,
    required: [true, "Provide your shop's pincode"],
    minLength: [6, "6 Characters required."],
    maxLength: [6, "6 Characters required."],
  },
});
