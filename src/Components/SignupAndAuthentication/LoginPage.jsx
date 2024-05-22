import classes from "./LoginPage.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { Grid, TextField } from "@mui/material";
import { Form, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProprietorUI = () => {
  return (
    <>
      <Grid item lg={12} md={12} sm={12} xs={12} className={classes.header}>
        <h1>
          Log in as{" "}
          <span style={{ color: "#1DB954", fontFamily: "poppins" }}>
            {" "}
            Proprietor
          </span>
        </h1>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} className={classes.main}>
        <Form method="POST" className={classes.form_main}>
          <label htmlFor="number">Your Number</label>
          <br />
          <TextField id="outlined" />
          <br />
          <label htmlFor="number">Your Password</label>
          <br />
          <TextField id="outlined" />
          <button type="submit">Login</button>
        </Form>
      </Grid>

      <Grid item lg={12} md={12} sm={12} xs={12} className={classes.toggleText}>
        <Link to={"/proprietor-signup-form"}>
          <h4 className={classes.formH4}>
            Not Signed up?{" "}
            <span style={{ color: "#1DB954", fontFamily: "poppins" }}>
              sign up then
            </span>
          </h4>
        </Link>
      </Grid>
    </>
  );
};

const CustomerUI = () => {
  return (
    <Grid>
      {" "}
      <Grid item lg={12} md={12} sm={12} xs={12} className={classes.header}>
        <h1>
          Log in as{" "}
          <span style={{ color: "#1DB954", fontFamily: "poppins" }}>
            {" "}
            Customer
          </span>
        </h1>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} className={classes.main}>
        <Form method="POST" className={classes.form_main}>
          <label htmlFor="number">Your Number</label>
          <br />
          <TextField id="outlined" />
          <br />
          <label htmlFor="number">Your Password</label>
          <br />
          <TextField id="outlined" />
          <button type="submit">Login</button>
        </Form>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} className={classes.toggleText}>
        <Link to={"/customer-signup-form"}>
          <h4 className={classes.formH4}>
            Not Signed up?{" "}
            <span style={{ color: "#1DB954", fontFamily: "poppins" }}>
              sign up then
            </span>
          </h4>
        </Link>
      </Grid>
    </Grid>
  );
};
const LoginPage = () => {
  const customerLoginState = useSelector(
    (state) => state.sliceOne.customerLogin
  );
  return (
    <>
      <BasicCoverDiv>
        {customerLoginState === true ? <CustomerUI /> : <ProprietorUI />}
      </BasicCoverDiv>
    </>
  );
};

export default LoginPage;
