import { Box, Button, Grid } from "@mui/material";
import BasicCoverDiv from "./BasicCoverDiv";
import FaceIcon from "@mui/icons-material/Face";
import GeneralButton from "./GeneralButton";
import { Link } from "react-router-dom";
import classes from "./NotLoggedInLandingPage.module.css";

const NotLoggedInLandingPage = (props) => {
  const { heading, linkk, btnTitle } = props;

  console.log(linkk);
  return (
    <>
      <BasicCoverDiv heading={heading} heading_highlight="Check and retry">
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

          <Link to={linkk}>
            <GeneralButton btn_title={btnTitle} />
          </Link>
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default NotLoggedInLandingPage;
