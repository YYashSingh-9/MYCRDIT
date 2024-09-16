import classes from "./UserLevelBar.module.css";
import TollIcon from "@mui/icons-material/Toll"; // -> Gold
import PaymentsIcon from "@mui/icons-material/Payments"; // -> Silver
import AlbumIcon from "@mui/icons-material/Album"; // -> Bronze
import Brightness5Icon from "@mui/icons-material/Brightness5"; // -> Platinum
import Brightness1Icon from "@mui/icons-material/Brightness1"; // -> Base
import { Box } from "@mui/material";

// Levels (testing)
// >500 -> Base
// 500 >= && <= 1200 ->Bronze
// 1201 >= && <= 2200 -> Silver
// 2200 >= && <= 3500 -> Gold
// 3500 >= && <= 6500 -> Platinum

const mcs_points = 502;
let profile_Level = "";
profile_Level = mcs_points < 500 ? "Base" : "";
profile_Level = mcs_points >= 501 && mcs_points <= 1200 ? "Bronze" : "";
profile_Level = mcs_points >= 1201 && mcs_points <= 2200 && "Silver";
profile_Level = mcs_points >= 2201 && mcs_points <= 3500 && "Gold";
profile_Level = mcs_points >= 3501 && mcs_points <= 6500 && "Platinum";

console.log(profile_Level);

const UserLevelBar = () => {
  let levelBar_bg;
  if (mcs_points < 500) {
    levelBar_bg = classes.baseBg;
  }
  if (mcs_points >= 501 && mcs_points <= 1200) {
    levelBar_bg = classes.bronzeBg;
  }
  if (mcs_points >= 1201 && mcs_points <= 2200) {
    levelBar_bg = classes.silverBg;
  }
  if (mcs_points >= 2201 && mcs_points <= 3500) {
    levelBar_bg = classes.goldBg;
  }
  if (mcs_points >= 3501 && mcs_points <= 6500) {
    levelBar_bg = classes.platinumBg;
  }

  return (
    <>
      <Box className={classes.bar}>
        <Box className={classes.heading}>
          <Box className={classes.uppr}>
            <h3>Your MyCrdit Score :</h3>
            <h3> {mcs_points}</h3>
          </Box>
        </Box>
        <Box className={`${classes.inner_bar} ${levelBar_bg}`}>
          <h3>{profile_Level} Pro</h3>
          {/* <TollIcon />
           */}
          <Brightness1Icon />
        </Box>
      </Box>
    </>
  );
};

export default UserLevelBar;
