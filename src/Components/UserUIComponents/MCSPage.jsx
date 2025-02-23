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
          <h3>How MyCrdit score system works ?{"(2)"}</h3>
          <p>
            Customer when consecutively clear his/her each debt{" "}
            {"(within 30 days)"} for at least 3 months and then 6 months
            continously, extra BCS {"(Behavioural credit score)"} will be added
          </p>{" "}
          <br />
          <h3>How MyCrdit score system works ?</h3>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham{" "}
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
