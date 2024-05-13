import { Box, Grid } from "@mui/material";
import classes from "./Footer.module.css";
import playstoreImg from "../../assets/play.png";
import appleStoreImg from "../../assets/apple.png";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.footerContainer}
      >
        <Grid item xs={12} md={12} lg={12} className={classes.footerTop}>
          <Box className={classes.storelinks}>
            <h3>
              Download the MYCRDIT app
              <br />
              for better pay later service
            </h3>
            <img src={playstoreImg} />
            <img src={appleStoreImg} />
          </Box>
          <Box className={classes.socialLinksPart}>
            <XIcon className={classes.icon} />
            <InstagramIcon className={classes.icon} />
            <FacebookIcon className={classes.icon} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
