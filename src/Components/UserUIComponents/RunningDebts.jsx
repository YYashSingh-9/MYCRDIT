import classes from "./RunningDebts.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import { Link } from "react-router-dom";
import { ListItem } from "./HistoryPage";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import NotLoggedInLandingPage from "../AdditionalComponents/NotLoggedInLandingPage";

const RunningDebtsPage = () => {
  const currentAcc_Type = useSelector((state) => state.sliceOne.accountType);

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
            <ListItem
              title={"Mishra ji,Sunflower oil"}
              date={"14-06-24"}
              amt={250}
              btnTitle={"pending"}
              icnType={"pending"}
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
