import classes from "./AccountInfoPart.module.css";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import GeneralButton from "./GeneralButton";
import Mini_TScoreIndicator from "../MinorComponents/Mini_TScoreIndicator";

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
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.levelBar}>
          <Mini_TScoreIndicator />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.infoGrid}>
          <table className={classes.infoBox}>
            <tbody>
              <tr className={classes.row}>
                <td>
                  {accountType === "customer" ? "Customer" : "Proprietor"} Name
                  :
                </td>
                <td>Alokik Mishra</td>
              </tr>
            </tbody>
            <tbody>
              <tr className={classes.row}>
                <td>
                  {accountType === "customer" ? "Customer" : "Proprietor"}{" "}
                  Number :
                </td>
                <td>9876498033</td>
              </tr>
            </tbody>
            <tbody>
              <tr className={classes.row}>
                <td>
                  {accountType === "customer" ? "Customer" : "Proprietor"} ID :
                </td>
                <td>127484474HD138</td>
              </tr>
            </tbody>
          </table>
        </Grid>

        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.accountBtnContainer}
        >
          {accountType === "customer" && (
            <Link to={"/my-note-requests"}>
              <GeneralButton
                icnTitle={"pending requests"}
                btn_title={"Check Requests"}
              />
            </Link>
          )}

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
          {accountType === "customer" ? (
            <Link to={"/my-current-score"}>
              <GeneralButton icnTitle={"money"} btn_title={"MCS System"} />
            </Link>
          ) : (
            <Link to={"/review-form"}>
              <GeneralButton
                icnTitle={"review"}
                btn_title={"Share your view"}
              />
            </Link>
          )}
          {accountType === "customer" ? (
            <Link to={"/edit-customer-info"}>
              <GeneralButton
                icnTitle={"edit account"}
                btn_title={"Edit account"}
              />
            </Link>
          ) : (
            <Link to={"/edit-proprietor-info"}>
              <GeneralButton
                icnTitle={"edit account"}
                btn_title={"Edit account"}
              />
            </Link>
          )}
          {accountType === "customer" ? (
            <Link to={"/my-running-debts"}>
              <GeneralButton
                icnTitle={"runningDebt"}
                btn_title={"Running debts"}
              />
              {/* {notificationState} */}
              {/* <Box className={classes.notificationBall_2}>1</Box> */}
            </Link>
          ) : (
            <Link to={"/my-shop-info"}>
              <GeneralButton icnTitle={"shopInfo"} btn_title={"Shop Info"} />
            </Link>
          )}

          <Link to={"/"}>
            <GeneralButton icnTitle={"home"} btn_title={"Home"} />
          </Link>
          <Link to={"/login"}>
            <GeneralButton icnTitle={"account"} btn_title={"Logout"} />
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default AccountInfoPart;
