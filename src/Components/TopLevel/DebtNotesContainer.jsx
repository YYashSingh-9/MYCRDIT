import { Box, Container, Grid, Typography } from "@mui/material";
import classes from "./DebtNotesContainer.module.css";
import EditIcon from "@mui/icons-material/Edit";
import ListContainer from "../AdditionalComponents/ListContainer";

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
          <h3>
            <span style={{ color: "darkgreen" }}> Modi Kirana's</span> book
          </h3>
          <button className={classes.userTag}>Proprietor</button>
          <button className={classes.noteBtn}>
            <h4>Create Note</h4>
            <EditIcon className={classes.noteIcn} />
          </button>
        </Grid>
        <Grid item md={12} xs={12} lg={12} sx={{ width: "100%" }}>
          <ListContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default DebtNotesContainer;
