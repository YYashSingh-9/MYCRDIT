import classes from "./LoginPage.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { Grid, TextField, Box } from "@mui/material";
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sliceOneActions } from "../../Store/sliceOne";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import quickinLogo from "../../assets/QUICK-IN__1_-removebg-preview.png";
import InitialSlider from "../AdditionalComponents/InitialSlider";
import { useEffect } from "react";

const ProprietorUI = (props) => {
  return (
    <Grid>
      <InitialSlider />

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
        <Form method="POST" action="/login" className={classes.form_main}>
          <label htmlFor="number">Your Number</label>
          <br />
          <TextField id="outlined" name="contactNumber" />
          <br />
          <label htmlFor="password">Your Password</label>
          <br />
          <TextField id="outlined" name="password" />
          <GeneralButton
            typeBtn="submit"
            btn_title="Login"
            name="intent"
            value="login"
          />
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
            Authenticate
          </span>
        </h4>
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
    </Grid>
  );
};

const CustomerUI = (props) => {
  return (
    <Grid>
      <InitialSlider />{" "}
      <Grid item lg={12} md={12} sm={12} xs={12} className={classes.header}>
        <h1>
          Authenticate as{" "}
          <span style={{ color: "#1DB954", fontFamily: "poppins" }}>
            {" "}
            Customer
          </span>
        </h1>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} className={classes.main}>
        <Form method="POST" action="/login" className={classes.form_main}>
          <label htmlFor="number">Your Number</label>
          <br />
          <TextField id="outlined" name="contactNumber" />
          <br />

          {/* .... Below part was original before quickin authentication update */}
          {/* <label htmlFor="password">Your Password</label>
          <br />
          <TextField id="outlined" /> */}

          <GeneralButton typeBtn="submit" btn_title="Authenticate" />
          {/* <button type="submit"> "Authenticate"</button> */}
        </Form>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} className={classes.toggleText}>
        {/* .... Below part was original before quickin authentication update */}
        {/* <Link to={"/customer-signup-form"}>
          <h4 className={classes.formH4}>
            Not Signed up?{" "}
            <span style={{ color: "#1DB954", fontFamily: "poppins" }}>
              sign up then
            </span>
          </h4>
        </Link> */}
        <h4 className={classes.formH4} onClick={props.onclick}>
          A proprietor ?{" "}
          <span style={{ color: "#1DB954", fontFamily: "poppins" }}>
            Authenticate
          </span>
        </h4>
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
    </Grid>
  );
};

const LoginPage = () => {
  const Navigate = useNavigate();
  const actionData = useActionData();
  const accountType_UI = useSelector((state) => state.sliceOne.accountType);
  const dispatch = useDispatch();
  const toProprietor = () => {
    dispatch(sliceOneActions.accountTypeToggler("proprietor"));
  };
  const toCustomer = () => {
    dispatch(sliceOneActions.accountTypeToggler("customer"));
  };

  useEffect(() => {
    if (actionData) {
      console.log(actionData);
      if (actionData.status === "Success") {
        console.log("running here");
        dispatch(
          sliceOneActions.authentication_Info_Storage_handler(actionData)
        );
        Navigate("/");
      }
    }
  }, [actionData]);

  return (
    <>
      <InitialSlider />
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
