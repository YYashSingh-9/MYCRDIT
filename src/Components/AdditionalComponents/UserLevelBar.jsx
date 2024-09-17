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

const UserLevelBar = () => {
  let profile_Level;
  let levelBar_bg;
  const mcs_points = 1800;

  if (mcs_points < 500) {
    levelBar_bg = classes.baseBg;
    profile_Level = "Base";
  }
  if (mcs_points >= 501 && mcs_points <= 1200) {
    levelBar_bg = classes.bronzeBg;
    profile_Level = "Bronze";
  }
  if (mcs_points >= 1201 && mcs_points <= 2200) {
    levelBar_bg = classes.silverBg;
    profile_Level = "Silver";
  }
  if (mcs_points >= 2201 && mcs_points <= 3500) {
    levelBar_bg = classes.goldBg;
    profile_Level = "Gold";
  }
  if (mcs_points >= 3501 && mcs_points <= 6500) {
    levelBar_bg = classes.platinumBg;
    profile_Level = "Platinum";
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
          {profile_Level === "Base" && <Brightness1Icon />}
          {profile_Level === "Bronze" && <AlbumIcon />}
          {profile_Level === "Silver" && (
            <PaymentsIcon style={{ color: "rgb(30, 30, 30)" }} />
          )}
          {profile_Level === "Gold" && <TollIcon />}
          {profile_Level === "Platinum" && (
            <Brightness5Icon style={{ color: "rgb(30, 30, 30)" }} />
          )}
        </Box>
      </Box>
    </>
  );
};

export default UserLevelBar;
