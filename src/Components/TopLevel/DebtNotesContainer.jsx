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
import MoodIcon from "@mui/icons-material/Mood";

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
  const dispatch = useDispatch();

  const currentUserCookie = currentUserData.token;
  const currentRunningNotes = runningDebtNotes.filter(
    (el) => el.deleted === false
  );
  const { data, isLoading, isError, isPending } = useQuery({
    queryKey: ["all-running-notes"],
    queryFn: () => {
      return getHomePage_Data_Proprietor(currentUserCookie);
    },
  });

  useEffect(() => {
    if (data) {
      if (data.status === "Success") {
        dispatch(sliceOneActions.saveAllRunningNotes(data));
      }
    }
  }, [data]);

  return (
    <>
      <BasicCoverDiv>
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
              <h3> No current running notes!</h3>
              <MoodIcon className={classes.faceIcn} />
              <p>
                Hey{" "}
                <span style={{ color: "#1DB954", fontWeight: 600 }}>
                  {" "}
                  {currentUserData.data.ProprietorName}
                </span>
                , create more debt notes and manage them here.
                <br />
                Click the create note button on upper right.
              </p>
            </Box>
          )}
          {isLoading ? (
            <p>loading..</p>
          ) : (
            <ListContainer itemArray={currentRunningNotes} />
          )}
        </Grid>
      </BasicCoverDiv>
      <hr
        style={{
          width: "60vw",
          height: "0.5rem ",
          backgroundColor: "rgb(30, 30, 30)",
          borderRadius: "1rem",
          outline: "none",
          border: "none",
          margin: "auto",
        }}
      />
    </>
  );
};

export default DebtNotesContainer;
