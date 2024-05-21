import { Grid } from "@mui/material";
import classes from "./BasicCoverDiv.module.css";

const BasicCoverDiv = (props) => {
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.mainGrid}
      >
        {props.children}
      </Grid>
    </>
  );
};

export default BasicCoverDiv;
