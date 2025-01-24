import { Box } from "@mui/material";
import classes from "./Administrator.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";

const Administrator_button = (props) => {
  return (
    <>
      <button className={classes.btn_cls}>{props.btn_title}</button>
    </>
  );
};

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
          <Box className={classes.action_section}>
            <Box className={classes.singleActions}>
              <Administrator_button btn_title="All Customers" />
              <Administrator_button btn_title="All Proprietors" />
              <Administrator_button btn_title="All Notes" />
            </Box>
          </Box>
        </Box>
      </BasicCoverDiv>
    </>
  );
};

export default Administrator;
