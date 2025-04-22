import classes from "./RunningDebts.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import { Link } from "react-router-dom";
import { ListItem } from "./HistoryPage";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import NotLoggedInLandingPage from "../AdditionalComponents/NotLoggedInLandingPage";
import { useQuery } from "@tanstack/react-query";
import { get_notes_handler } from "../../Store/actionCreatorThunk";
const RunningDebtsPage = () => {
  const currentAcc_Type = useSelector((state) => state.sliceOne.accountType);
  const currentUserData = useSelector(
    (state) => state.sliceOne.accountUserData
  );

  const { data, isLoading, isError } = useQuery({
    queryKey: ["all-running-notes"],
    queryFn: () => {
      return get_notes_handler(
        currentUserData.token,
        "accepted-notes",
        currentUserData.data.contactNumber
      );
    },
  });
  console.log(data);
  return (
    <>
      {currentAcc_Type === "customer" ? (
        <BasicCoverDiv heading={"Your"} heading_highlight={" Running debts."}>
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
              ? data.data.map((el, i) => <ListItem key={i} data={el} />)
              : ""}
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
      ) : (
        <NotLoggedInLandingPage
          heading="Unable to access "
          btnTitle="Home"
          linkk="/"
        />
      )}
    </>
  );
};

export default RunningDebtsPage;
