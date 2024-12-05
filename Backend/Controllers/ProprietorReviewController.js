const proprietorReview = require("../Models/propreitorReviewModel");
const catchAsync = require("../Utilities/catchAsync");

exports.createReview = catchAsync(async (req, res, next) => {
  const { proprietorId } = req.body;

  if (!proprietorId) return next(new Error("Proprietor's id is missing."));

  const doc = await proprietorReview.create(req.body);

  res.status(200).json({
    status: "Success",
    data: {
      message: "Review sent successfully.",
    },
  });
});
