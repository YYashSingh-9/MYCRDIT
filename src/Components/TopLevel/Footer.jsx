import { Box, Grid } from "@mui/material";
import classes from "./Footer.module.css";
import playstoreImg from "../../assets/play.png";
import appleStoreImg from "../../assets/apple.png";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

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
            <Link to={"https://twitter.com/Yash__9999"}>
              <XIcon className={classes.icon} />
            </Link>

            <Link to={"https://www.instagram.com/yasshwardhan_siingh/"}>
              <InstagramIcon className={classes.icon} />
            </Link>

            <Link
              to={"https://www.linkedin.com/in/yashwardhan-singh-083064291/"}
            >
              <FacebookIcon className={classes.icon} />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={12} className={classes.footerBottom}>
          <Box className={classes.footerText}>
            <hr />
            <h4>
              This is prototype v1.0, developed by{" "}
              <span style={{ color: "#1DB954" }}> Yasshwardhan Siingh</span>{" "}
            </h4>
            <h5>
              <span style={{ textDecoration: "underline" }}>
                Copyright 2024
              </span>
              , All Rights reserved
            </h5>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
