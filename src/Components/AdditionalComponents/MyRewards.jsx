import classes from "./MyRewards.module.css";
import BasicCoverDiv from "./BasicCoverDiv";
import { useParams } from "react-router-dom";

const MyRewards = () => {
  const { id } = useParams();
  return (
    <>
      <BasicCoverDiv
        heading={"Your  "}
        heading_highlight={"  Rewards"}
      ></BasicCoverDiv>
    </>
  );
};

export default MyRewards;
