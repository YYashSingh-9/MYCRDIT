import classes from "./MCScorePage.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import GeneraltButton from "../AdditionalComponents/GeneralButton";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

const MCScorePage = () => {
  const userType = useSelector((state) => state.sliceOne.accountType);
  return (
    <>
      {userType === "customer" ? (
        <BasicCoverDiv heading="Your " heading_highlight="MYCRDIT Score">
          <Box className={classes.parentBox}>
            <Box className={classes.childBox_one}>
              <Box>
                <h2>25</h2>
              </Box>
              <Box>
                <h4>Mr Yash's current score is displayed above.</h4>
              </Box>
            </Box>
            <Box className={classes.childBox_two}>
              <Box>
                <h3>some information regarding mycrdit score</h3>
                <h3>some information regarding mycrdit score</h3>
                <h3>some information regarding mycrdit score</h3>
              </Box>
            </Box>
            <Box className={classes.childBox_three}>
              <GeneraltButton />
            </Box>
          </Box>
        </BasicCoverDiv>
      ) : (
        <p>Link not active for this account type.</p>
      )}
    </>
  );
};

export default MCScorePage;
