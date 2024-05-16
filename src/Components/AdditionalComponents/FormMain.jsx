import { Box, Grid } from "@mui/material";
import classes from "./FormMain.module.css";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Form, Link } from "react-router-dom";

const FormMain = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.header}>
          <Link to={"/"}>
            <button>
              <ArrowBackIcon /> Back
            </button>
          </Link>
          <Box>
            <FiberNewIcon />
            <h3>New Debt Note</h3>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Form method="POST"></Form>
        </Grid>
      </Grid>
    </>
  );
};

export default FormMain;
