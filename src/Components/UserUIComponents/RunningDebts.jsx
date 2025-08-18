import classes from "./RunningDebts.module.css";
import Spinner from "../AdditionalComponents/Spinner";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import NotLoggedInLandingPage from "../AdditionalComponents/NotLoggedInLandingPage";
import WhenNoItemToDisplay from "../AdditionalComponents/WhenNoItemToDisplay";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { ListItem } from "./HistoryPage";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { get_notes_handler } from "../../Store/actionCreatorThunk";

const RunningDebtsPage = () => {
  const currentAcc_Type = useSelector((state) => state.sliceOne.accountType);
  const currentUserData = useSelector(
    (state) => state.sliceOne.accountUserData
  );

  const { data, isFetching } = useQuery({
    queryKey: ["all-running-notes"],
    queryFn: () => {
      return get_notes_handler(
        currentUserData.token,
        "accepted-notes",
        currentUserData.data.contactNumber
      );
    },
  });

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
            {data &&
            data.status === "Success" &&
            !isFetching &&
            data.data.length >= 1 ? (
              data.data.map((el, i) => <ListItem key={i} obj={el} />)
            ) : (
              <Spinner />
            )}
          </Grid>
          {data && data.data.length === 0 && data.status === "Success" && (
            <WhenNoItemToDisplay
              userName={currentUserData.data.customerName}
              title={"No running notes"}
              subtitle={
                "There are no current running notes, buy product on credit with MYCRDIT app."
              }
            />
          )}
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={classes.btnSection}
            marginBottom={2}
          >
            <Link
              to={`/your-account-details/${currentAcc_Type},${currentUserData.token}`}
            >
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
