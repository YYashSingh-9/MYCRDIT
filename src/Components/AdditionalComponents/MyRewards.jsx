import classes from "./MyRewards.module.css";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BasicCoverDiv from "./BasicCoverDiv";
import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import GeneralButton from "./GeneralButton";

const RewardBox = () => {
  return (
    <>
      <Box className={classes.parent_reward_Box}>
        <Box>
          <h2>Reward title</h2>
          <p>Reward description like etc</p>
        </Box>
        <Box>
          <GeneralButton btn_title="Redeem" />
        </Box>
      </Box>
    </>
  );
};

const MyRewards = () => {
  const { id } = useParams();
  return (
    <>
      <BasicCoverDiv heading={"Your  "} heading_highlight={"  Rewards"}>
        <Grid item xs="12" sm="12" md="12" lg="12">
          <Box className={classes.subtitleBox}>
            <Box className={classes.boxLeft}>
              <h2>Available rewards</h2>
              <p>
                Rewards are available only for some time, use them before
                expire.
              </p>
            </Box>
            <Box className={classes.boxRight}>
              <EmojiEventsIcon />
            </Box>
          </Box>
        </Grid>
        <Grid item xs="12" sm="12" md="12" lg="12">
          <Box className={classes.rewardsBox}>
            <RewardBox />
          </Box>
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default MyRewards;
