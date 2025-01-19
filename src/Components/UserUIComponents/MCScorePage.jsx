import classes from "./MCScorePage.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { useSelector } from "react-redux";

const MCScorePage = () => {
  const userType = useSelector((state) => state.sliceOne.accountType);
  return (
    <>
      {userType === "customer" ? (
        <BasicCoverDiv heading="Your" heading_highlight="MCS"></BasicCoverDiv>
      ) : (
        <p>Link not active for this account type.</p>
      )}
    </>
  );
};

export default MCScorePage;
