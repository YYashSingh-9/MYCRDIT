import classes from "./HistoryPage.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Link } from "react-router-dom";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import NotLoggedInLandingPage from "../AdditionalComponents/NotLoggedInLandingPage";
import { useQuery } from "@tanstack/react-query";
import { getClearedNotes } from "../../Store/actionCreatorThunk";

export const ListItem = (props) => {
  let clearState, pendingState;
  const { amount, cleared, noteTitle, date } = props.obj;

  clearState = cleared === true ? true : false;
  // pendingState =

  const date_1 = new Date(date).toISOString().substring(0, 10);

  console.log(props.obj);
  return (
    <>
      <Box className={classes.liBox}>
        <Box className={classes.info_left}>
          <h3>{noteTitle}</h3>
          <h4>{date_1}</h4>
        </Box>

        <Box className={classes.info_right}>
          <h4>{`${amount}/-`}</h4>
          <button className={classes.clearIndicatorBtn}>
            {/* {cleared === true ? (
              <DoneAllIcon />
            ) : (
              <PendingActionsIcon className={classes.pending} />
            )} */}
            {clearState && <DoneAllIcon className={classes.cleartick} />}
            {props.btnTitle}
          </button>
        </Box>
      </Box>
    </>
  );
};

const HistoryPage = () => {
  const accType = useSelector((state) => state.sliceOne.accountType);
  const userCookie = useSelector((state) => state.sliceOne.accountUserCookie);
  const enabaleVal = accType && userCookie ? true : false;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cleared-notes"],
    queryFn: () => {
      return getClearedNotes(userCookie, accType);
    },
    enabled: enabaleVal,
  });
  console.log(data, accType, userCookie);
  return (
    <>
      {accType === "" ? (
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
            {data && data.status === "Success"
              ? data.data.map((el) => <ListItem obj={el} />)
              : ""}
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
