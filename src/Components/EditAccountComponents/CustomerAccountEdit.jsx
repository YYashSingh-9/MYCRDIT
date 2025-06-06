import { useActionData, useNavigate } from "react-router-dom";
import EditAccount from "./EditAccount";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const CustomerAccountEdit = () => {
  let customerData, backLink_Id, isLoggedIn;
  const titles = ["Name", "contactNumber"];
  const userData = useSelector((state) => state.sliceOne.accountUserData);
  const acc_type = useSelector((state) => state.sliceOne.accountType);

  if (userData && userData.status === "Success") {
    customerData = {
      name: userData.data.customerName,
      contactNumber: userData.data.contactNumber,
    };
    backLink_Id = `${acc_type},${userData.token}`;
  }

  isLoggedIn = userData && userData.status === "Success" ? true : false;

  return (
    <>
      <EditAccount
        titleNHtmlFor={titles}
        bck_btnLink={backLink_Id}
        loginState={isLoggedIn}
        info={customerData}
      />
    </>
  );
};

export default CustomerAccountEdit;
