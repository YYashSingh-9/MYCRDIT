import { Grid } from "@mui/material";
import classes from "./AccountPage.module.css";

const AccountPage = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item lg={12} md={12} xs={12} sm={12} className={classes.header}>
          <h1>Account of Prateek</h1>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xs={12}
          sm={12}
          className={classes.infoPart}
        ></Grid>
      </Grid>
    </>
  );
};

export default AccountPage;
