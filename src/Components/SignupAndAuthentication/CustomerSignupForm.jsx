import classes from "./CustomerSignupForm.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";

const CustomerSignupForm = () => {
  return (
    <>
      <BasicCoverDiv>
        <Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} className={classes.header}>
            <h1>
              Sign up as{" "}
              <span style={{ color: "#1DB954", fontFamily: "poppins" }}>
                {" "}
                Customer.{" "}
              </span>
            </h1>
          </Grid>
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default CustomerSignupForm;
