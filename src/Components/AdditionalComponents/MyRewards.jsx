import classes from "./MyRewards.module.css";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BasicCoverDiv from "./BasicCoverDiv";
import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";

const MyRewards = () => {
  const { id } = useParams();
  return (
    <>
      <BasicCoverDiv heading={"Your  "} heading_highlight={"  Rewards"}>
        <Grid item xs="12" sm="12" md="12" lg="12">
          <Box className={classes.subtitleBox}>
            <Box className={classes.boxLeft}>
              <h2>Available rewards</h2>
              <h4>
                Rewards are Available only for some time, use them before
                expire.
              </h4>
            </Box>
            <Box className={classes.boxRight}>
              <AutoAwesomeRoundedIcon />
              <EmojiEventsIcon />
            </Box>
          </Box>
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default MyRewards;
