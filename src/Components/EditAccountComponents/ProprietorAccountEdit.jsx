import { useSelector } from "react-redux";
import EditAccount from "./EditAccount";

const ProprietorAccountEdit = () => {
  const titles = ["Proprietor Name", "Proprietor Number"];
  const userData = useSelector((state) => state.sliceOne.accountUserData);
  const acc_type = useSelector((state) => state.sliceOne.acc_type);
  console.log(userData);
  let proprietorData, backLink_Id;
  if (userData && userData.status === "Success") {
    proprietorData = {
      name: userData.data.ProprietorName,
      contactNumber: userData.contactNumber,
    };

    backLink_Id = `${acc_type},${userData.token}`;
  }
  return (
    <>
      <EditAccount titleNHtmlFor={titles} bck_btnLink={backLink_Id} />
    </>
  );
};

export default ProprietorAccountEdit;
