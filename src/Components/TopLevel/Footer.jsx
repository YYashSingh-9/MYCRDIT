import { Box, Grid } from "@mui/material";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={12} lg={12}>
          <Box>
            <h3>
              Download the MYCRDIT app
              <br />
              for better pay later service
            </h3>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
