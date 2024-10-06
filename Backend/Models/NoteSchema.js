const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  noteTitle: {
    type: String,
    required: true,
    minLength: [5, "Minimum 5 characters are required."],
  },
  customerName: {
    type: String,
    required: [true, "Provde customer name"],
    minLength: [5, "Minimum 5 characters are required."],
  },
  customerNumber: {
    type: Number,
    required: [true, "Please provide customer number"],
    minLength: [10, "10 characters are required"],
    maxLength: [10, "10 characters are required"],
  },
  productBrand: {
    type: String,
    required: [true, "Provide product brand name"],
    minLength: [5, "Minimum 5 characters are required"],
    maxLength: [30, "Reached 30 characters limit"],
  },
  productName: {
    type: String,
  },
});
