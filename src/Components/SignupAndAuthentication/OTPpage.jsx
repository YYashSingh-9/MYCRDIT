import { useRef } from "react";
import { Grid, Box } from "@mui/material";
import { Form, useNavigate } from "react-router-dom";
import classes from "./OTPpage.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import quickinLogo from "../../assets/QUICK-IN__1_-removebg-preview.png";

const OTPpage = () => {
  const ref = useRef();
  const Navigate = useNavigate();

  const otpSubmitter = (e) => {
    e.preventDefault();
    if (ref.current.value === "2222") {
      Navigate("/");
    }
  };
  return (
    <>
      <BasicCoverDiv heading={"Enter your"} heading_highlight={" OTP"}>
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.main}>
          <Form
            method="POST"
            className={classes.form_main}
            onSubmit={otpSubmitter}
          >
            <label htmlFor="number">One time password : enter 2222</label>
            <br />
            <input
              id="outlined"
              ref={ref}
              style={{ backgroundColor: "white" }}
            />
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
