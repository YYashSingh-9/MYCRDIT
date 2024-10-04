import classes from "./OTPpage.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { Grid, TextField, Box } from "@mui/material";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import { Form, Link } from "react-router-dom";
import quickinLogo from "../../assets/QUICK-IN__1_-removebg-preview.png";

const OTPpage = () => {
  return (
    <>
      <BasicCoverDiv heading={"Enter your"} heading_highlight={"OTP"}>
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.main}>
          <Form method="POST" className={classes.form_main}>
            <label htmlFor="number">OTP </label>
            <br />
            <TextField id="outlined" />
            <br />
            <GeneralButton typeBtn="submit" btn_title="Authenticate" />
          </Form>
        </Grid>

        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.quickinText}
        >
          <Box className={classes.quickinTitle}>
            <h4 className={classes.formH4}>Powered by</h4>
            <img src={quickinLogo} className={classes.quickinImg} />
          </Box>
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default OTPpage;
