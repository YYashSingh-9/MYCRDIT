import { Box, Button, Grid } from "@mui/material";
import BasicCoverDiv from "./BasicCoverDiv";
import FaceIcon from "@mui/icons-material/Face";
import GeneralButton from "./GeneralButton";
import { Link } from "react-router-dom";
import classes from "./NotLoggedInLandingPage.module.css";

const NotLoggedInLandingPage = (props) => {
  const { heading, linkk, btnTitle, highlight_text } = props;

  return (
    <>
      <BasicCoverDiv heading={heading} heading_highlight={highlight_text}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.btn_Grid}
          mb={5}
        >
          <FaceIcon className={classes.faceIcn} />

          <Link to={linkk}>
            <GeneralButton btn_title={btnTitle} />
          </Link>
          <hr className={classes.endliner} />
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default NotLoggedInLandingPage;
