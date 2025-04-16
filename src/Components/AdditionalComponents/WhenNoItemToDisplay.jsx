import classes from "./WhenNoItemToDisplay.module.css";
import { Box } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import GeneralButton from "./GeneralButton";
import { Link } from "react-router-dom";

const WhenNoItemToDisplay = (props) => {
  return (
    <>
      <Box className={classes.noReqsBox}>
        <Box>
          <h2>
            Hey <span style={{ color: "#1DB954" }}>{props.userName}</span>,{" "}
            {props.title}.
          </h2>
          <Box>
            <FaceIcon className={classes.faceIcn} />
          </Box>
          <p>{props.subtitle}</p>
        </Box>
        <Box className={classes.homeBtn}>
          <Link to={"/"}>
            <GeneralButton btn_title="Home" />
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default WhenNoItemToDisplay;
