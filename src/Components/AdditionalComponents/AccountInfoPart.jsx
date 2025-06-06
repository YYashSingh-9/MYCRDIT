import classes from "./AccountInfoPart.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import GeneralButton from "./GeneralButton";
import Mini_TScoreIndicator from "../MinorComponents/Mini_TScoreIndicator";
import { useMutation } from "@tanstack/react-query";
import { logout_handler } from "../../Store/actionCreatorThunk";
import { useDispatch, useSelector } from "react-redux";
import { sliceOneActions } from "../../Store/sliceOne";

const AccountInfoPart = (props) => {
  const { accountType, cookie } = props.data;
  const userData = useSelector((state) => state.sliceOne.accountUserData);
  const paramsToSend = `${accountType},${cookie}`;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(props.user_data);

  const { data, isError, isPending, mutate } = useMutation({
    mutationKey: ["logout-handle"],
    mutationFn: () => {
      return logout_handler(accountType, cookie);
    },
  });

  const logoutHandle = () => {
    mutate();
    dispatch(sliceOneActions.localStorageClear_Handler());
    navigate("/");
  };
  console.log(props.user_data);
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.mainGrid}
      >
        {accountType === "customer" && (
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={classes.levelBar}
          >
            <Mini_TScoreIndicator
              pts={userData.data.transactionalScore.toFixed(2)}
            />
          </Grid>
        )}

        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.infoGrid}>
          <table className={classes.infoBox}>
            <tbody>
              <tr className={classes.row}>
                <td>
                  {accountType === "customer" ? "Customer" : "Proprietor"} Name
                  :
                </td>
                <td>
                  {accountType === "customer"
                    ? props.user_data.customerName
                    : props.user_data.ProprietorName}
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr className={classes.row}>
                <td>
                  {accountType === "customer" ? "Customer" : "Proprietor"}{" "}
                  Number :
                </td>
                <td>{props.user_data.contactNumber}</td>
              </tr>
            </tbody>
            <tbody>
              <tr className={classes.row}>
                <td>
                  {accountType === "customer" ? "Customer" : "Proprietor"} ID :
                </td>
                <td>{props.user_data._id}</td>
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
            <Link to={`/my-note-requests/${paramsToSend}`}>
              <GeneralButton
                icnTitle={"pending requests"}
                btn_title={"Check Requests"}
              />
            </Link>
          )}

          {accountType === "customer" ? (
            <Link to={`/your-history-details/${paramsToSend}`}>
              <GeneralButton icnTitle={"history"} btn_title={"Check History"} />
            </Link>
          ) : (
            <Link to={`/your-history-details/${paramsToSend}`}>
              <GeneralButton
                icnTitle={"history"}
                btn_title={"All Cleared Debts"}
              />
            </Link>
          )}
          {accountType === "customer" && (
            <Link to={`/bts-mycrdit-score/${paramsToSend}`}>
              <GeneralButton icnTitle={"money"} btn_title={"MCS System"} />
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
          {accountType === "customer" ? (
            <Link to={"/my-current-mcs"}>
              <GeneralButton icnTitle={"money"} btn_title={"MCS Score"} />
            </Link>
          ) : (
            <Link to={"/review-form"}>
              <GeneralButton
                icnTitle={"review"}
                btn_title={"Share your view"}
              />
            </Link>
          )}
          <Link to={"/"}>
            <GeneralButton icnTitle={"home"} btn_title={"Home"} />
          </Link>

          <Box onClick={logoutHandle}>
            <GeneralButton icnTitle={"account"} btn_title={"Logout"} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AccountInfoPart;
