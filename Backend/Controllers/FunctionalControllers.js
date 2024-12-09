const proprietor = require("../Models/proprietorModel");
const catchAsync = require("../Utilities/catchAsync");

const filterObj = (obj, ...allowedFields) => {
  console.log(obj, allowedFields);
  let newObject = {};
  Object.keys(obj).forEach((curr_el) => {
    if (allowedFields.includes(curr_el))
      return (newObject[curr_el] = obj[curr_el]);
    console.log(newObject, allowedFields, curr_el);
  });
  return newObject;
};

exports.updateShopInfo = catchAsync(async (req, res, next) => {
  const allowed_fields = [
    "ProprietorName",
    "shopName",
    "shopAddress",
    "shopCategory",
    "contactNumber",
    "proprietorGST",
  ];

  if (req.body.password) return next(new Error("invalid fields are included"));

  const filteredObject = filterObj(
    req.body,
    "ProprietorName",
    "shopName",
    "shopAddress",
    "shopCategory",
    "contactNumber",
    "proprietorGST"
  );
  //   console.log(filteredObject);
});
