import { Box } from "@mui/material";
import classes from "./NoteRequestItem.module.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
const NoteRequestItem = (props) => {
  return (
    <>
      <Box className={classes.liBox}>
        <Box className={classes.info_left}>
          <h3>{props.title}</h3>
          <h4>{props.date}</h4>
        </Box>

        <Box className={classes.info_right}>
          <button className={` ${classes.btn} ${classes.acceptbtn} `}>
            Accept
            <CheckCircleIcon className={classes.btn_icn} />
          </button>
          <button className={` ${classes.btn} ${classes.rejectbtn} `}>
            Reject
            <CancelIcon className={classes.btn_icn} />
          </button>
        </Box>
      </Box>
    </>
  );
};

export default NoteRequestItem;
