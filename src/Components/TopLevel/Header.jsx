import { Box, Button, Toolbar, Typography } from "@mui/material";
import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
// font-family: "Manrope", sans-serif;
// font-optical-sizing: auto;
// font-weight: <weight>;
// font-style: normal;
const Header = () => {
  return (
    <>
      <Box>
        <Toolbar className={classes.navbar}>
          <img src={logo} className={classes.logoImg} />
          <Typography
            variant="h4"
            sx={{
              color: "#404040",
              marginLeft: 2,
              fontWeight: 800,
              fontSize: 30,
              fontFamily: "Manrope",
            }}
          >
            MY CRDIT
          </Typography>
          <Box
            sx={{
              marginLeft: "auto",
              color: "Black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1DB954",
                borderRadius: "2rem",
                ":hover": { bgcolor: "#1DB954" },
              }}
            >
              <Typography variant="h7" mr={1}>
                DETAILS
              </Typography>
              <AccountBoxIcon />
            </Button>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default Header;
