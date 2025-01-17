import classes from "./HistoryPage.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Link } from "react-router-dom";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import NotLoggedInLandingPage from "../AdditionalComponents/NotLoggedInLandingPage";
import CancelIcon from "@mui/icons-material/Cancel";

export const ListItem = (props) => {
  return (
    <>
      <Box className={classes.liBox}>
        <Box className={classes.info_left}>
          <h3>{props.title}</h3>
          <h4>{props.date}</h4>
        </Box>

        <Box className={classes.info_right}>
          <h4>{`${props.amt}/-`}</h4>
          <button className={classes.clearIndicatorBtn}>
            {props.icnType === "tick" ? (
              <DoneAllIcon className={classes.cleartick} />
            ) : (
              <PendingActionsIcon className={classes.pending} />
            )}

            {props.btnTitle}
          </button>
        </Box>
      </Box>
    </>
  );
};

const HistoryPage = () => {
  const accType = useSelector((state) => state.sliceOne.accountType);

  return (
    <>
      {accType === "null" ? (
        <NotLoggedInLandingPage
          heading="Not authorized, "
          btnTitle="Home"
          linkk="/"
        />
      ) : (
        <BasicCoverDiv>
          <Grid item lg={12} md={12} sm={12} xs={12} className={classes.header}>
            <h1>
              Your{" "}
              <span style={{ color: "#1DB954", fontFamily: "poppins" }}>
                {accType === "proprietor" ? "cleared debts" : "History"}
              </span>
            </h1>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            marginBottom={3}
            className={classes.detailsBox}
          >
            <ListItem
              title={"Mishra ji,Sunflower oil"}
              date={"14-06-24"}
              amt={250}
              btnTitle={"Cleared"}
              icnType={"tick"}
            />
            <ListItem
              title={"Mishra ji,Sunflower oil"}
              date={"14-06-24"}
              amt={250}
              btnTitle={"Cleared"}
              icnType={"tick"}
            />{" "}
            <ListItem
              title={"Mishra ji,Sunflower oil"}
              date={"14-06-24"}
              amt={250}
              btnTitle={"Cleared"}
              icnType={"tick"}
            />{" "}
            <ListItem
              title={"Mishra ji,Sunflower oil"}
              date={"14-06-24"}
              amt={250}
              btnTitle={"Cleared"}
              icnType={"tick"}
            />{" "}
            <ListItem
              title={"Mishra ji,Sunflower oil"}
              date={"14-06-24"}
              amt={250}
              btnTitle={"Cleared"}
              icnType={"tick"}
            />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={classes.btnSection}
            marginBottom={2}
          >
            <Link to={"/your-account-details"}>
              <GeneralButton btn_title={"back"} />
            </Link>
          </Grid>
        </BasicCoverDiv>
      )}
    </>
  );
};

export default HistoryPage;
