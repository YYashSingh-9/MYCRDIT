const mongoose = require("mongoose");

const proprietorSchema = mongoose.Schema({
  ProprietorName: {
    type: String,
    required: true,
  },
});
