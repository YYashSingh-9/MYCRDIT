import { Grid } from "@mui/material";
import classes from "./BasicCoverDiv.module.css";
import InitialSlider from "./InitialSlider";
const BasicCoverDiv = (props) => {
  return (
    <>
      <InitialSlider />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.mainGrid}
      >
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <h1>
            {props.heading}
            <span style={{ color: "#1DB954", fontFamily: "poppins" }}>
              {props.heading_highlight}
            </span>
          </h1>
        </Grid>

        {props.children}
      </Grid>
    </>
  );
};

export default BasicCoverDiv;
