import { Box, TextField } from "@mui/material";
import classes from "./NewDebtNoteForm.module.css";

const NewDebtNoteForm = (props) => {
  const customer_number = props.customer_number;
  const numberVal = customer_number ? customer_number : "";
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
          <textarea
            className={classes.txt_area}
            placeholder="*Write here like - 1 bag of lays chips 20"
            name="noteTitle"
          />
          <input
            id="outlined"
            name="customerNumber"
            placeholder="Customer Number"
            defaultValue={numberVal}
          />
          {/* <button>Add note</button> */}
        </Box>
      </Box>
    </>
  );
};

export default NewDebtNoteForm;
