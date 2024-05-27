import classes from "./AccountInfoPart.module.css";
import { Grid } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import TimelineIcon from "@mui/icons-material/Timeline";
import HomeIcon from "@mui/icons-material/Home";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import GeneralButton from "./GeneralButton";
import { Link } from "react-router-dom";

const AccountInfoPart = (props) => {
  const accountType = props.accountType;
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.mainGrid}
      >
        <Grid item lg={12} md={12} sm={12} sx={12} className={classes.infoGrid}>
          <table className={classes.infoBox}>
            <tr className={classes.row}>
              <td>Customer Name :</td>
              <td>Alokik Mishra</td>
            </tr>
            <tr className={classes.row}>
              <td>Customer Number :</td>
              <td>9876498033</td>
            </tr>
            <tr className={classes.row}>
              <td>Customer ID</td>
              <td>127484474HD138</td>
            </tr>
          </table>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          sx={12}
          className={classes.accountBtnContainer}
        >
          {accountType === "customer" ? (
            <Link to={"/your-history-details"}>
              <GeneralButton icnTitle={"history"} btn_title={"Check History"} />
            </Link>
          ) : (
            <Link to={"/your-history-details"}>
              <GeneralButton
                icnTitle={"history"}
                btn_title={"All Cleared Debts"}
              />
            </Link>
          )}
          <br />
          {accountType === "customer" ? (
            <Link to={"/my-running-debts"}>
              <GeneralButton
                icnTitle={"runningDebt"}
                btn_title={"Running debts"}
              />
            </Link>
          ) : (
            <Link to={"/my-shop-info"}>
              <GeneralButton icnTitle={"shopInfo"} btn_title={"Shop Info"} />
            </Link>
          )}
          <br />
          <Link to={"/"}>
            <GeneralButton icnTitle={"home"} btn_title={"Home"} />
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default AccountInfoPart;
