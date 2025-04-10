import { Box, Button, Toolbar, Typography } from "@mui/material";
import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NotificationsIcon from "@mui/icons-material/Notifications";
const styles = {
  heading: {
    color: "#404040",
    marginLeft: 2,
    fontWeight: 800,
    fontSize: 30,
    fontFamily: "Manrope",
    "@media only screen and (min-width: 280px) and (max-width: 576px)": {
      fontSize: 22,
      marginLeft: 1,
    },
  },
  detailsButtonFont: {
    fontFamily: "poppins",
    fontWeight: "400",
    "@media only screen and (min-width: 280px) and (max-width: 576px)": {
      fontSize: 0,
      display: "none",
    },
  },
  detailBtn: {
    backgroundColor: "#1DB954",
    borderRadius: "2rem",
    ":hover": { bgcolor: "#1DB954" },
    "@media only screen and (min-width: 280px) and (max-width: 576px)": {
      width: "1rem",
    },
  },
};

const Header = () => {
  const accountType = useSelector((state) => state.sliceOne.accountType);
  const currentUserCookie = useSelector(
    (state) => state.sliceOne.accountUserCookie
  );
  const notificationState = useSelector(
    (state) => state.sliceOne.isNotificationOn
  );
  const paramsToSend = `${accountType},${currentUserCookie}`;
  return (
    <>
      <Box>
        <Toolbar className={classes.navbar}>
          <img src={logo} className={classes.logoImg} />

          <Link to={"/"}>
            <Typography variant="h4" sx={styles.heading}>
              MY CRDIT
            </Typography>
          </Link>
          <Box
            sx={{
              marginLeft: "auto",
              color: "Black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {accountType === "administrator" && (
              <Button variant="contained" sx={styles.detailBtn}>
                <Typography variant="h7" mr={1} sx={styles.detailsButtonFont}>
                  Logout
                </Typography>
                <AccountBoxIcon className={classes.icn} />
              </Button>
            )}
            {accountType === "proprietor" && "customer" && (
              <Link to={`/your-account-details/${paramsToSend}`}>
                <Button variant="contained" sx={styles.detailBtn}>
                  <Typography variant="h7" mr={1} sx={styles.detailsButtonFont}>
                    details
                  </Typography>
                  <AccountBoxIcon className={classes.icn} />
                </Button>
              </Link>
            )}

            {/* {accountType === "administrator" ? (
              <Button variant="contained" sx={styles.detailBtn}>
                <Typography variant="h7" mr={1} sx={styles.detailsButtonFont}>
                  Logout
                </Typography>
                <AccountBoxIcon className={classes.icn} />
              </Button>
            ) : (
              <Link to={`/your-account-details/${paramsToSend}`}>
                <Button variant="contained" sx={styles.detailBtn}>
                  <Typography variant="h7" mr={1} sx={styles.detailsButtonFont}>
                    details
                  </Typography>
                  <AccountBoxIcon className={classes.icn} />
                </Button>
              </Link>
            )} */}
            {notificationState && (
              <Box className={classes.notificationBall}></Box>
            )}
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default Header;
