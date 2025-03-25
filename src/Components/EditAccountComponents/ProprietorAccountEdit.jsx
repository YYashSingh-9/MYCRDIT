import { useSelector } from "react-redux";
import EditAccount from "./EditAccount";

const ProprietorAccountEdit = () => {
  const titles = ["Proprietor Name", "Proprietor Number"];
  const userData = useSelector((state) => state.sliceOne.accountUserData);
  const acc_type = useSelector((state) => state.sliceOne.acc_type);

  let proprietorData, backLink_Id, isLoggedIn;
  if (userData && userData.status === "Success") {
    proprietorData = {
      name: userData.data.ProprietorName,
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

export default ProprietorAccountEdit;
