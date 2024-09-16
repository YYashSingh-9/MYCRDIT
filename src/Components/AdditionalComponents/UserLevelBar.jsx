import classes from "./UserLevelBar.module.css";
import TollIcon from "@mui/icons-material/Toll"; // -> Gold
import PaymentsIcon from "@mui/icons-material/Payments"; // -> Silver
import AlbumIcon from "@mui/icons-material/Album"; // -> Bronze
import Brightness5Icon from "@mui/icons-material/Brightness5"; // -> Platinum
import Brightness1Icon from "@mui/icons-material/Brightness1"; // -> Base
import { Box } from "@mui/material";

const UserLevelBar = () => {
  return (
    <>
      <Box className={classes.bar}></Box>
    </>
  );
};

export default UserLevelBar;
