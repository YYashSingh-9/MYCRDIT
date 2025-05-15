import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <>
      <Box className={classes.spinnerBox}>
        <CircularProgress />
      </Box>
    </>
  );
};

export default Spinner;
