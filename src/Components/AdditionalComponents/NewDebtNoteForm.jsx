import { Box, TextField } from "@mui/material";
import classes from "./NewDebtNoteForm.module.css";

const NewDebtNoteForm = () => {
  return (
    <>
      <Box className={classes.parentBox}>
        <Box className={classes.formBox}>
          <textarea className={classes.txt_area} />
          <button>Add note</button>
        </Box>
      </Box>
    </>
  );
};

export default NewDebtNoteForm;
