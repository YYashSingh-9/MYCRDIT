import classes from "./WhenNoItemToDisplay.module.css";
import { Box } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

const whenNoItemToDisplay = (props) => {
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
          <GeneralButton btn_title="Home" />
        </Box>
      </Box>
    </>
  );
};

export default whenNoItemToDisplay;
