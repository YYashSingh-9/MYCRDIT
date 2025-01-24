import { Box } from "@mui/material";
import classes from "./Administrator.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";

const Administrator = () => {
  return (
    <>
      <BasicCoverDiv heading_highlight="Panel" heading="Administrator ">
        <Box className={classes.parentBox}>
          <Box className={classes.heading}>
            <h3>
              This is administrator's panel. Current Administrator -{" "}
              <span style={{ color: "#1DB954", fontWeight: "600" }}>Yash </span>
            </h3>
            <p style={{ fontWeight: "600" }}>
              All the fetched information will be shown in console log.
            </p>
          </Box>
          <Box className={classes.action_section}></Box>
        </Box>
      </BasicCoverDiv>
    </>
  );
};

export default Administrator;
