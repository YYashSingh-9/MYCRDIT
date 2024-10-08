const mongoose = require("mongoose");

const paidNoteSchema = mongoose.Schema({
  debtNote_Id: {
    type: mongoose.Schema.ObjectId,
  },
  customerNumber: {
    type: Number,
  },
});
