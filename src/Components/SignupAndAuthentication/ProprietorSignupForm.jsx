import classes from "./ProprietorSignupForm.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { Grid } from "@mui/material";
const ProprietorSignupForm = () => {
  return (
    <>
      <BasicCoverDiv>
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.header}>
          <h1>
            Sign up as{" "}
            <span style={{ color: "#1DB954", fontFamily: "poppins" }}>
              {" "}
              Proprietor{" "}
            </span>
          </h1>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.formContainer}
        ></Grid>
      </BasicCoverDiv>
    </>
  );
};

export default ProprietorSignupForm;
