import EditAccount from "./EditAccount";

const CustomerAccountEdit = () => {
  const titles = ["Customer Name", "Customer Number"];
  const userData = useSelector((state) => state.sliceOne.accountUserData);
  const acc_type = useSelector((state) => state.sliceOne.acc_type);

  let customerData, backLink_Id, isLoggedIn;
  if (userData && userData.status === "Success") {
    customerData = {
      name: userData.data.customerName,
      contactNumber: userData.contactNumber,
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
      />
    </>
  );
};

export default CustomerAccountEdit;
