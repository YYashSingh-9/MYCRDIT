import classes from "./AccountInfoPart.module.css";
import { Grid } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Link } from "react-router-dom";
const AccountInfoPart = () => {
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
          <Link to={"/"}>
            <button>
              <HistoryIcon />
              Check History
            </button>
          </Link>
          <Link to={"/"}>
            <button>
              <TimelineIcon />
              Running debts
            </button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default AccountInfoPart;
