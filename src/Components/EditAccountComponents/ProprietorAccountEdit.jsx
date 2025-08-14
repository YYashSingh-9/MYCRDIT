import { useSelector } from "react-redux";
import EditAccount from "./EditAccount";

const ProprietorAccountEdit = () => {
  let proprietorData, backLink_Id, isLoggedIn;
  const titles = ["name", "contactNumber"];

  const userData = useSelector((state) => state.sliceOne.accountUserData);
  const acc_type = useSelector((state) => state.sliceOne.accountType);

  if (userData && userData.status === "Success") {
    proprietorData = {
      name: userData.data.ProprietorName,
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
        info={proprietorData}
      />
    </>
  );
};

export default ProprietorAccountEdit;
