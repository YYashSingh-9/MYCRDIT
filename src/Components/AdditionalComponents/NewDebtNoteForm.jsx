import { Box, TextField } from "@mui/material";
import classes from "./NewDebtNoteForm.module.css";

const NewDebtNoteForm = () => {
  return (
    <>
      <Box className={classes.parentBox}>
        <Box className={classes.new_note_heading}>
          <h3>Fill note details below</h3>
          <h3>
            {"("}Note amount also required {")"}
          </h3>
        </Box>
        <Box className={classes.formBox}>
          <textarea className={classes.txt_area} />
          <button>Add note</button>
        </Box>
      </Box>
    </>
  );
};

export default NewDebtNoteForm;
