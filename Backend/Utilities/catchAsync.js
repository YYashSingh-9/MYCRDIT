const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      return next(new Error(err));
    });
  };
};

module.exports = catchAsync;
