import classes from "./MCSPage.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { Grid } from "@mui/material";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import { Link } from "react-router-dom";

const MCSPage = () => {
  return (
    <>
      <BasicCoverDiv heading={"BTS of"} heading_highlight={" MyCrdit Score"}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          marginBottom={3}
          className={classes.detailsBox}
        >
          <h3>How MyCrdit score system works ? {"(1)"}</h3>
          <p>
            Customer must clear his/her credit dues before 30 days of initiation
            of debt note. On successful transaction of each debt note within 30
            days, TCS will be added to customer's account. If customer somehow
            pays after 40 days duration then no TCS
            {"(Transactional credit score)"} will be added.
          </p>
          <br />
          <h3>How MyCrdit score system works ? {"(2)"}</h3>
          <p>
            Customer when consecutively clear his/her each debt{" "}
            {"(within 30 days)"} for at least 3 months and then 6 months
            continously, extra BCS {"(Behavioural credit score)"} will be added
            to customer's account.
          </p>{" "}
          <br />
          <h3>How MyCrdit score system works ? {"(3)"}</h3>
          <p>
            On successfully clearing each debt notes on time and also
            consecutively clearing debt notes then your total mycrdit score will
            be accumulated. As per your mycrdit score you will be assigned to
            your "level bar". <br />
            <br />
            Higher level bar class means you are highly acceptable for credits
            based on your level bar
          </p>
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
    </>
  );
};

export default MCSPage;
