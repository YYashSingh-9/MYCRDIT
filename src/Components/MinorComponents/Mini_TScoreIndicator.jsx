import { Box } from "@mui/material";
import classes from "./Mini_TScoreIndicator.module.css";
import { Link } from "react-router-dom";

const Mini_TScoreIndicator = () => {
  return (
    <>
      <Box className={classes.bsar}>
        <Box className={classes.scorePart}>
          <h3>Current Transactional Score : </h3>
          <h3>1</h3>
        </Box>
        <Box>
          <Link to={"/my-current-mcs"}>
            <p>Check your total MCS </p>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Mini_TScoreIndicator;
