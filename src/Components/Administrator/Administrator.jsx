import { Box, TextField } from "@mui/material";
import { Form } from "react-router-dom";
import classes from "./Administrator.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";

const Administrator_button = (props) => {
  return (
    <>
      <button className={classes.btn_cls}>{props.btn_title}</button>
    </>
  );
};

const Administrator_button_search = (props) => {
  return (
    <>
      <TextField id="outlined-basic" label={props.title} />
      <button type="submit" className={classes.btn_submit}>
        Check
      </button>
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
            <span
              style={{
                fontWeight: "600",
              }}
            >
              <p>All the fetched information will be shown in console log.</p>
            </span>
          </Box>
          <Box className={classes.action_section}>
            <Box className={classes.singleActions}>
              <Administrator_button btn_title="All Customers" />
              <Administrator_button btn_title="All Proprietors" />
              <Administrator_button btn_title="All Notes" />
            </Box>
            <Box className={classes.searchActions}>
              <Form method="POST" className={classes.frm}>
                <Administrator_button_search title="A proprietor" />
                <Administrator_button_search title="A customer " />
                <Administrator_button_search title="A Note" />
              </Form>
            </Box>
          </Box>
        </Box>
      </BasicCoverDiv>
    </>
  );
};

export default Administrator;
