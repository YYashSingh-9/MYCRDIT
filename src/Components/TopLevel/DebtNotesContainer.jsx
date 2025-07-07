import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { sliceOneActions } from "../../Store/sliceOne";
import { useDispatch, useSelector } from "react-redux";
import { getHomePage_Data_Proprietor } from "../../Store/actionCreatorThunk";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InventoryIcon from "@mui/icons-material/Inventory";
import classes from "./DebtNotesContainer.module.css";
import EditIcon from "@mui/icons-material/Edit";
import ListContainer from "../AdditionalComponents/ListContainer";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import MoodIcon from "@mui/icons-material/Mood";
import Spinner from "../AdditionalComponents/Spinner";
import { ToastContainer, toast, Slide } from "react-toastify";

const notifyFunction = () => {
  return toast("Logged in successfully.✅", {
    position: "top-right",
    hideProgressBar: true,
    autoClose: 1000,
    transition: Slide,
  });
};

const TagButton = (props) => {
  const conditionalStyle = props.click ? classes.clickEffect : "";
  return (
    <>
      <button className={`${classes.userTag} ${conditionalStyle}`}>
        {props.iconTitle === "store" && (
          <StorefrontIcon sx={{ marginRight: 1 }} />
        )}
        {props.iconTitle === "daily" && (
          <InventoryIcon sx={{ marginRight: 1 }} />
        )}{" "}
        {props.iconTitle === "create" && <EditIcon sx={{ marginRight: 1 }} />}
        {props.tagTitle}
      </button>
    </>
  );
};

const DebtNotesContainer = () => {
  const currentUserData = useSelector(
    (state) => state.sliceOne.accountUserData
  );
  const runningDebtNotes = useSelector(
    (state) => state.sliceOne.proprietors_running_Notes_Array
  );
  const dummyRunningNotes = useSelector(
    (state) => state.sliceOne.dummy_Proprietor_Notes_Array
  );
  const filterNotificationState = useSelector(
    (state) => state.sliceOne.filterNotificationState
  );
  const loginState = useSelector((state) => state.sliceOne.recentLoginState);

  const dispatch = useDispatch();

  const currentUserCookie = currentUserData.token;
  const allNotes = dummyRunningNotes.filter(
    (el) => el.deleted === false && el.cleared === false
  );
  const currentRunningNotes = allNotes.reverse();
  const enableStat = currentUserCookie ? true : false;
  const { data, isLoading, isError, isPending } = useQuery({
    queryKey: ["all-running-notes"],
    queryFn: () => {
      return getHomePage_Data_Proprietor(currentUserCookie);
    },
    enabled: enableStat,
  });
  const reloadAllNotes = () => {
    dispatch(sliceOneActions.reload_all_notes_toArray());
  };

  useEffect(() => {
    if (data) {
      if (data.status === "Success") {
        dispatch(sliceOneActions.saveAllRunningNotes(data));
      }
    }
    if (loginState === true) {
      notifyFunction();

      dispatch(sliceOneActions.loginState_reset());
    }
  }, [data, loginState]);

  return (
    <>
      <BasicCoverDiv>
        {isLoading && <Spinner />}
        {data && data.status === "Success" && (
          <>
            <Grid item md={12} xs={12} className={classes.headingPart}>
              <h3>
                <span style={{ color: "darkgreen" }}>
                  {currentUserData.data.shopName}'s
                </span>{" "}
                book
              </h3>
              <Box className={classes.tags}>
                <TagButton iconTitle="store" tagTitle="Proprietor" />
                <TagButton iconTitle="daily" tagTitle="Daily Needs" />
                <Link to={"/add-debt-note-form"}>
                  <TagButton
                    iconTitle="create"
                    tagTitle="Create Note"
                    click={true}
                  />
                </Link>
              </Box>
            </Grid>
            <Grid item md={12} xs={12} lg={12} sx={{ width: "100%" }}>
              {currentRunningNotes.length === 0 && (
                <Box className={classes.dummyStateBox}>
                  <h3>
                    {filterNotificationState
                      ? "No searched notes found."
                      : ` No current running notes!`}
                  </h3>
                  <MoodIcon className={classes.faceIcn} />
                  <p>
                    Hey{" "}
                    <span style={{ color: "#1DB954", fontWeight: 600 }}>
                      {" "}
                      {currentUserData.data.ProprietorName}
                    </span>
                    ,{" "}
                    {filterNotificationState
                      ? " check if searched term matches debt notes data."
                      : "create more debt notes and manage them."}
                    <br />
                    {filterNotificationState
                      ? " Click all notes button to get all notes."
                      : " Click the create note button on upper right."}
                  </p>
                  {filterNotificationState && (
                    <Box
                      onClick={reloadAllNotes}
                      sx={{
                        padding: "none",
                        width: "10%",
                        margin: "auto",
                      }}
                    >
                      {" "}
                      <GeneralButton btn_title="All Notes" />
                    </Box>
                  )}
                </Box>
              )}
              {isLoading && currentRunningNotes.length === 0 ? (
                <p>loading..</p>
              ) : (
                <ListContainer itemArray={currentRunningNotes} />
              )}
              {filterNotificationState && (
                <Box
                  onClick={reloadAllNotes}
                  sx={{
                    padding: "none",
                    width: "10%",
                    margin: "auto",
                    marginBottom: 2,
                  }}
                >
                  {" "}
                  <GeneralButton btn_title="All Notes" />
                </Box>
              )}
            </Grid>
          </>
        )}
        <ToastContainer />
      </BasicCoverDiv>
      <hr
        style={{
          width: "60vw",
          height: "0.1rem ",
          backgroundColor: "rgb(221, 221, 221)",
          outline: "none",
          margin: "auto",
          border: "none",
          marginBottom: "2rem",
        }}
      />
    </>
  );
};

export default DebtNotesContainer;
