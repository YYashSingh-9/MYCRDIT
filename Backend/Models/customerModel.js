const mongoose = require("mongoose");
const validator = require("validator");

const customerSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
    minlength: [5, "Minimum 5 characters required. "],
    maxlength: [20, "Maximum 20 characters allowed. "],
  },
  contactNumber: {
    type: Number,
    unique: true,
    minlength: [10, "10 character number is required. "],
    required: true,
  },
  password: {
    type: String,
    required: [true, "You must have a password. "],
    minlength: [8, "Password must be 8 characters long. "],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please provide confirm password. "],
    minlength: [8, "Password must be 8 character long. "],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
  },
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
