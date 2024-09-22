import { Grid, Box } from "@mui/material";
import classes from "./DebtDetails.module.css";
import { Link } from "react-router-dom";
import InitialSlider from "../AdditionalComponents/InitialSlider";
import DetailedNote from "../AdditionalComponents/DetailDebtNote";

const DebtDetailsPage = () => {
  return (
    <>
      <InitialSlider />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.main}
      >
        <Grid item lg={12} sm={12} md={12} xs={12} className={classes.headBar}>
          <header className={classes.title}>
            <h3>Debt Note of Mishra ji</h3>
          </header>
        </Grid>
        <Grid item lg={12} sm={12} md={12} xs={12} className={classes.headBar}>
          <button>Add to this a/c</button>
        </Grid>
        <Grid
          item
          lg={12}
          sm={12}
          md={12}
          xs={12}
          className={classes.parentContainer}
        >
          <DetailedNote />
          <DetailedNote />
          <DetailedNote />
          <DetailedNote />
        </Grid>
      </Grid>
    </>
  );
};

export default DebtDetailsPage;
