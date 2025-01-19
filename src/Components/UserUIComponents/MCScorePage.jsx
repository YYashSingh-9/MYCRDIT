import classes from "./MCSorePage.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { useSelector } from "react-redux";

const MCScorePage = () => {
  const userType = useSelector((state) => state.sliceOne.accountType);
  return (
    <>
      <BasicCoverDiv heading="Your" heading_highlight="MCS"></BasicCoverDiv>
    </>
  );
};

export default MCScorePage;
