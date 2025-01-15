import { Box } from "@mui/material";
import classes from "./DigitalBanner_forShop.module.css";

const DigitalBanner = () => {
  return (
    <>
      <Box className={classes.banner_box}>
        <h3>Shop from</h3>
        <h1>Modi Kirana !</h1>
        <h4>Use MYCrdit account here to shop and relax..</h4>
        <h4>find modi kirana at vidya nagar,near shiv mandir</h4>
      </Box>
    </>
  );
};

export default DigitalBanner;
