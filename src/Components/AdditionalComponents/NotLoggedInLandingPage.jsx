import { Box, Button, Grid } from "@mui/material";
import BasicCoverDiv from "./BasicCoverDiv";
import FaceIcon from "@mui/icons-material/Face";
import GeneralButton from "./GeneralButton";
import { Link } from "react-router-dom";
import classes from "./NotLoggedInLandingPage.module.css";

const NotLoggedInLandingPage = () => {
  return (
    <>
      <BasicCoverDiv
        heading="You are not logged in, "
        heading_highlight="Login first to use."
      >
        <Grid
          item
          lg={8}
          md={8}
          sm={10}
          xs={12}
          className={classes.btn_Grid}
          mb={5}
        >
          <FaceIcon className={classes.faceIcn} />

          <Link to={"/login"}>
            <GeneralButton btn_title={"login now"} />
          </Link>
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default NotLoggedInLandingPage;
