import { Box, Button, Toolbar, Typography } from "@mui/material";
import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box>
        <Toolbar className={classes.navbar}>
          <img src={logo} className={classes.logoImg} />

          <Link to={"/"}>
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
            <Link to={"/your-account-details"}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1DB954",
                  borderRadius: "2rem",
                  ":hover": { bgcolor: "#1DB954" },
                }}
              >
                <Typography
                  variant="h7"
                  mr={1}
                  sx={{ fontFamily: "poppins", fontWeight: "400" }}
                >
                  DETAILS
                </Typography>
                <AccountBoxIcon />
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default Header;
