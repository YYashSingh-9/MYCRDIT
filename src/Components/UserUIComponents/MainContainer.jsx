import { Grid, Box, colors } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./MainContainer.module.css";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import DigitalBanner from "../AdditionalComponents/DigitalBanner_forShop";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const userData = useSelector((state) => state.sliceOne.accountUserData);
  const score = userData.data.transactionalScore.toFixed(2);
  return (
    <>
      <BasicCoverDiv>
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.header}>
          <h1>
            Home of{" "}
            <span style={{ color: "#1DB954" }}>
              {userData.data.customerName}{" "}
            </span>
          </h1>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.outerBox}>
          <Box className={classes.innerBox}>
            <Box className={classes.scoreCircle}>
              <h1>{score}</h1>
            </Box>
            <h3>
              Your current{" "}
              <span style={{ color: "#1db954" }}> Transactional </span> Score
            </h3>
            <Box>
              <Link to={"/my-current-mcs"}>
                <GeneralButton btn_title="Check MYCrdit Score" />
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.bannerGrid_Outer}
          marginTop={4}
        >
          <DigitalBanner />
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.gridOuter}
          marginTop={4}
          marginBottom={4}
        >
          <Box className={classes.tipBox}>
            <TipsAndUpdatesIcon className={classes.tipIcon} />
            <h3>Tip :</h3>
          </Box>
          <h4>
            Clear your debt bills on time to increase your MYCrdit Score{" "}
            {`(MCS)`}
          </h4>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.reviewtextBtn}
          marginTop={1}
          marginBottom={1}
        >
          <Link to={"/review-form"}>
            <h4>Share your review, feedback, and complain. Click here.</h4>
          </Link>
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default MainContainer;
