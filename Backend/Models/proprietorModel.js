const mongoose = require("mongoose");

const proprietorSchema = mongoose.Schema({
  ProprietorName: {
    type: String,
    required: [true, "Please enter your full name"],
  },
  shopName: {
    type: String,
    required: [true, "Shop name is required"],
    maxLength: [25, "Maximum 20 characters allowed"],
    minLength: [7, "Please provide original and proper name"],
  },
  shopAddress: {
    type: String,
    required: [true, "Please enter Shop address"],
    minLength: [20, "Address should not be in short"],
  },
  state: {
    type: String,
    required: [true, "Please enter state."],
  },
  pincode: {
    type: Number,
    required: [true, "Pincode is required"],
  },
  city: {
    type: String,
    required: [true, "Please enter your city"],
  },
  shopCategory: {
    type: String,
    required: [true, "Please provide your niche."],
  },
  otherShopCategory: {
    type: String,
  },
  contactNumber: {
    type: String,
    required: [true, "Please provide contact number"],
    minLength: [10, "Check your number."],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minLength: [5, "Password must be at lease 5 characters long"],
    maxLength: [16, "Password must not exceed 16 characters."],
  },
  confirmPassword: {
    type: String,
    required: [true, "Please enter password"],
    minLength: [5, "Password must be at lease 5 characters long"],
    maxLength: [16, "Password must not exceed 16 characters."],
    validate: function (el) {
      return el === this.password;
    },
  },
  mostSellingProduct: {
    type: String,
    minLength: [5, "Better description required"],
    maxLength: [20, "Product name getting too long"],
  },
  leastSellingProduct: {
    type: String,
    minLength: [5, "Better description required."],
    maxLength: [20, "Product name getting too long"],
  },
});
