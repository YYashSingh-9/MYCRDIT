const mongoose = require("mongoose");

const proprietorReviewSchema = mongoose.Schema({
  proprietorName: {
    type: String,
    required: [true, "Name required."],
  },
});
