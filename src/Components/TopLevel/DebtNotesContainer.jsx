import { Box, Container, Grid, Typography } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InventoryIcon from "@mui/icons-material/Inventory";
import classes from "./DebtNotesContainer.module.css";
import EditIcon from "@mui/icons-material/Edit";
import ListContainer from "../AdditionalComponents/ListContainer";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getHomePage_Data_Proprietor } from "../../Store/actionCreatorThunk";
import { useDispatch, useSelector } from "react-redux";

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
  const currentUserCookie = useSelector(
    (state) => state.sliceOne.accountUserCookie
  );
  const dispatch = useDispatch();

  console.log(currentUserCookie);
  const { data, isLoading, isError, isPending } = useQuery({
    queryKey: ["all-running-notes"],
    queryFn: () => {
      return getHomePage_Data_Proprietor(currentUserCookie);
    },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
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
            <span style={{ color: "darkgreen" }}> Modi Kirana's</span> book
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
          <ListContainer />
        </Grid>
      </BasicCoverDiv>
      <hr
        style={{
          width: "50vw",
          height: "0.5rem ",
          backgroundColor: "rgb(30, 30, 30)",
          borderRadius: "1rem",
          outline: "none",
          border: "none",
        }}
      />
    </>
  );
};

export default DebtNotesContainer;
