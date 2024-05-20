import { Grid, Box, colors } from "@mui/material";
import classes from "./MainContainer.module.css";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
const MainContainer = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.main}
      >
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.outerBox}>
          <Box className={classes.innerBox}>
            <Box className={classes.scoreCircle}>
              <h1>1</h1>
            </Box>
            <h3>
              Your current <span style={{ color: "#1db954" }}> MYCrdit</span>{" "}
              Score
            </h3>
          </Box>
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
      </Grid>
    </>
  );
};

export default MainContainer;
