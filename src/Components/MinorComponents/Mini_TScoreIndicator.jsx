import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./Mini_TScoreIndicator.module.css";

const Mini_TScoreIndicator = (props) => {
  const tcs = props.pts;
  return (
    <>
      <Box className={classes.bsar}>
        <Box className={classes.scorePart}>
          <h3>Current Transactional Score : </h3>
          <h3>{tcs}</h3>
        </Box>
        <Box className={classes.lnkPart}>
          <Link to={"/my-current-mcs"}>
            <p>Check your total MCS </p>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Mini_TScoreIndicator;
