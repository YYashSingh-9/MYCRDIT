import { Grid } from "@mui/material";
import classes from "./DebtDetailsPage.module.css";

const DebtDetailsPage = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={12} sm={12} md={12} xs={12} className={classes.headBar}>
          <header className={classes.title}>
            <h3>Debt Note of Mishra ji</h3>
          </header>
        </Grid>
        <Grid
          item
          lg={12}
          sm={12}
          md={12}
          xs={12}
          className={classes.infoContainer}
        >
          <Box className={classes.infoBox}></Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DebtDetailsPage;
