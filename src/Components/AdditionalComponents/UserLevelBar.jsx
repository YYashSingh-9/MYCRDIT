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
  const scoreCount = 499;
  let levelBar_bg;
  if (scoreCount < 500) {
    levelBar_bg = classes.baseBg;
  }
  if (scoreCount >= 501 && scoreCount <= 1200) {
    levelBar_bg = classes.bronzeBg;
  }
  if (scoreCount >= 1201 && scoreCount <= 2200) {
    levelBar_bg = classes.silverBg;
  }
  if (scoreCount >= 2201 && scoreCount <= 3500) {
    levelBar_bg = classes.goldBg;
  }
  if (scoreCount >= 3501 && scoreCount <= 6500) {
    levelBar_bg = classes.platinumBg;
  }

  return (
    <>
      <Box className={`${classes.bar} ${levelBar_bg}`}>
        <h3>Base Pro</h3>
        {/* <TollIcon />
         */}
        <Brightness1Icon />
      </Box>
    </>
  );
};

export default UserLevelBar;
