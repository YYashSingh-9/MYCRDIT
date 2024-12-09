const proprietor = require("../Models/proprietorModel");
const catchAsync = require("../Utilities/catchAsync");

exports.updateShopInfo = catchAsync(async (req, res, next) => {
  if (req.body.password) return next(new Error("invalid fields are included"));
});
