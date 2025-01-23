import { Box } from "@mui/material";
import classes from "./Administrator.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";

const Administrator = () => {
  return (
    <>
      <BasicCoverDiv>
        <Box className={classes.parentBox}>
          <Box className={classes.heading}>
            <h3>This is administrator's panel. Current Administrator - Yash</h3>
            <p>All the fetched information will be shown in console log.</p>
          </Box>
        </Box>
      </BasicCoverDiv>
    </>
  );
};

export default Administrator;
