import { Box, Container, Grid, Typography } from "@mui/material";
import classes from "./DebtNotesContainer.module.css";
import EditIcon from "@mui/icons-material/Edit";

const DebtNotesContainer = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.mainContainer}
      >
        <Grid item md={12} xs={12} className={classes.headingPart}>
          <h3>Current running debts</h3>

          <button className={classes.noteBtn}>
            <h4>Create Note</h4>
            <EditIcon className={classes.noteIcn} />
          </button>
        </Grid>
      </Grid>
    </>
  );
};

export default DebtNotesContainer;
