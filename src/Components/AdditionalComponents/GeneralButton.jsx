import classes from "./GeneralButton.module.css";
import HistoryIcon from "@mui/icons-material/History";
import TimelineIcon from "@mui/icons-material/Timeline";
import HomeIcon from "@mui/icons-material/Home";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const GeneralButton = (props) => {
  const iconTitle = props.icnTitle;
  return (
    <>
      <button className={classes.btn}>
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
        {props.btn_title}
      </button>
    </>
  );
};

export default GeneralButton;
