import { Box } from "@mui/material";
import classes from "./NoteRequestItem.module.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useMutation } from "@tanstack/react-query";
import { acceptingNoteHandler, client } from "../../Store/actionCreatorThunk";
import { useEffect } from "react";

const NoteRequestItem = (props) => {
  const date = props.data.date.slice(0, 10);

  const { data, mutate, isPending } = useMutation({
    mutationKey: ["accepting-notes"],
    mutationFn: () => {
      return acceptingNoteHandler(props.data._id, props.cookie);
    },
    onSuccess: () => {
      client.invalidateQueries("note-requests");
    },
  });

  const acceptingNote_Function = () => {
    mutate();
  };

  useEffect(() => {
    console.log(data);
    if (data && data.status === "Success") {
      console.log(data.data);
      props.clickFn();
    }
  }, [data]);

  return (
    <>
      <Box className={classes.liBox}>
        <Box className={classes.info_left}>
          <h3>{props.data.noteTitle}</h3>
          <h4>{date}</h4>
        </Box>

        <Box className={classes.info_right}>
          <button
            className={` ${classes.btn} ${classes.acceptbtn} `}
            onClick={acceptingNote_Function}
          >
            Accept
            <CheckCircleIcon className={classes.btn_icn} />
          </button>
          {/* <button className={` ${classes.btn} ${classes.rejectbtn} `}>
            Decline
            <CancelIcon className={classes.btn_icn} />
          </button> */}
        </Box>
      </Box>
    </>
  );
};

export default NoteRequestItem;
