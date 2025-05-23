import classes from "./GeneralButton.module.css";
import HistoryIcon from "@mui/icons-material/History";
import TimelineIcon from "@mui/icons-material/Timeline";
import HomeIcon from "@mui/icons-material/Home";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import EditIcon from "@mui/icons-material/Edit";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const GeneralButton = (props) => {
  const iconTitle = props.icnTitle;
  const btnType = props.typeBtn ? props.typeBtn : "button";
  const val = props.value ? props.value : "";
  const nam = props.name ? props.name : "";

  return (
    <>
      <Box className={classes.btnParent}>
        <button className={classes.btn} type={btnType} value={val} name={nam}>
          {iconTitle === "bacck" && <ArrowBackIcon className={classes.icn} />}
          {iconTitle === "home" && <HomeIcon className={classes.icn} />}
          {iconTitle === "history" && <HistoryIcon className={classes.icn} />}
          {iconTitle === "runningDebt" && (
            <TimelineIcon className={classes.icn} />
          )}
          {iconTitle === "shopInfo" && (
            <AddBusinessIcon className={classes.icn} />
          )}
          {iconTitle === "money" && (
            <MonetizationOnIcon className={classes.icn} />
          )}
          {iconTitle === "review" && <RateReviewIcon className={classes.icn} />}
          {iconTitle === "edit" && <EditIcon className={classes.icn} />}
          {iconTitle === "account" && (
            <AccountBoxIcon className={classes.icn} />
          )}
          {iconTitle === "pending requests" && (
            <ListAltIcon className={classes.icn} />
          )}
          {iconTitle === "edit account" && (
            <DriveFileRenameOutlineIcon className={classes.icn} />
          )}

          {props.btn_title}
        </button>
      </Box>
    </>
  );
};

export default GeneralButton;
