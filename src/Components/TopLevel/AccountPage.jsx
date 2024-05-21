import { Grid } from "@mui/material";
import classes from "./AccountPage.module.css";
import AccountInfoPart from "../AdditionalComponents/AccountInfoPart";
import { useSelector } from "react-redux";

const AccountPage = () => {
  const accType = useSelector((state) => state.sliceOne.accountType);

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.main}
      >
        <Grid item lg={12} md={12} xs={12} sm={12} className={classes.header}>
          <h1>Account of Prateek</h1>
        </Grid>
        <Grid item lg={12} md={12} xs={12} sm={12} className={classes.infoPart}>
          <AccountInfoPart accountType={accType} />
        </Grid>
      </Grid>
    </>
  );
};

export default AccountPage;
