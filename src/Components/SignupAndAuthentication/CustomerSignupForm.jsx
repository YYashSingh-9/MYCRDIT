import classes from "./CustomerSignupForm.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import IconButton from "@mui/material/IconButton";
import { Grid, TextField, OutlinedInput, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { Form, Link } from "react-router-dom";
import GeneralButton from "../AdditionalComponents/GeneralButton";

const CustomerSignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <BasicCoverDiv>
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.header}>
          <h1>
            Sign up as{" "}
            <span style={{ color: "#1DB954", fontFamily: "poppins" }}>
              {" "}
              Customer.{" "}
            </span>
          </h1>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.mainContainer}
        >
          <Form method="POST" className={classes.form_main}>
            <label htmlFor="Customer Name">Your Name</label>
            <br />
            <TextField id="outlined" />
            <hr />
            <label htmlFor="Customer Number">Contact Number</label>
            <br />
            <TextField id="outlined" />
            <hr />

            <label htmlFor="Customer Name">Your Password</label>
            <br />
            <OutlinedInput
              className={classes.pwInput}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <br />

            <GeneralButton typeBtn="submit" btn_title="Save" />
          </Form>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.toggleText}
        >
          <Link to={"/login"}>
            <h4 className={classes.formH4}>
              Already signed up?{" "}
              <span style={{ color: "#1DB954", fontFamily: "poppins" }}>
                Log in then
              </span>
            </h4>
          </Link>
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default CustomerSignupForm;
