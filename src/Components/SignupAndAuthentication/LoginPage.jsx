import classes from "./LoginPage.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { Grid, TextField, Box } from "@mui/material";
import { Form, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sliceOneActions } from "../../Store/sliceOne";
import GeneralButton from "../AdditionalComponents/GeneralButton";

const ProprietorUI = (props) => {
  return (
    <Grid>
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
          <GeneralButton typeBtn="submit" btn_title="Login" />
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

        <h4 className={classes.formH4} onClick={props.onclick}>
          A Customer ?{" "}
          <span style={{ color: "#1DB954", fontFamily: "poppins" }}>
            Login then
          </span>
        </h4>
      </Grid>
    </Grid>
  );
};

const CustomerUI = (props) => {
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
          <label htmlFor="password">Your Password</label>
          <br />
          <TextField id="outlined" />
          <GeneralButton typeBtn="submit" btn_title="Login" />
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

        <h4 className={classes.formH4} onClick={props.onclick}>
          A proprietor ?{" "}
          <span style={{ color: "#1DB954", fontFamily: "poppins" }}>
            Login then
          </span>
        </h4>
      </Grid>
    </Grid>
  );
};

const LoginPage = () => {
  const customerLoginState = useSelector(
    (state) => state.sliceOne.customerLogin
  );
  const accountType_UI = useSelector((state) => state.sliceOne.accountType);
  const dispatch = useDispatch();
  const toProprietor = () => {
    dispatch(sliceOneActions.accountTypeToggler("proprietor"));
  };
  const toCustomer = () => {
    dispatch(sliceOneActions.accountTypeToggler("customer"));
  };
  return (
    <>
      <BasicCoverDiv>
        {accountType_UI === "customer" ? (
          <CustomerUI onclick={toProprietor} />
        ) : (
          <ProprietorUI onclick={toCustomer} />
        )}
      </BasicCoverDiv>
    </>
  );
};

export default LoginPage;
