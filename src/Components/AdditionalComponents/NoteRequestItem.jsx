import { Box } from "@mui/material";
import classes from "./NoteRequestItem.module.css";

const NoteRequestItem = (props) => {
  return (
    <>
      <Box className={classes.liBox}>
        <Box className={classes.info_left}>
          <h3>{props.title}</h3>
          <h4>{props.date}</h4>
        </Box>

        <Box className={classes.info_right}>
          <button className={classes.acceptbtn}>Accept</button>
          <button className={classes.rejectbtn}>Reject</button>
        </Box>
      </Box>
    </>
  );
};

export default NoteRequestItem;
