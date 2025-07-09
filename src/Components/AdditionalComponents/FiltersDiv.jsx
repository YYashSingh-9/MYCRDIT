import { Container, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./FiltersDiv.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { Form } from "react-router-dom";
import { sliceOneActions } from "../../Store/sliceOne";

const HelperFilterInput = (props) => {
  const notesArray = props.notes;
  const inputType = props.type ? props.type : "text";

  let amountInput, titleInput, filtered_array, inputTextConverted;

  const filterHandler = () => {
    filtered_array = notesArray.filter((el) => {
      const title =
        el.noteTitle.charAt(0).toLowerCase() + el.noteTitle.slice(1);
      titleInput = String(props.refProp.current.value);
      inputTextConverted =
        titleInput.charAt(0).toLowerCase() + titleInput.slice(1);

      if (String(el.amount) === props.refProp.current.value) {
        return el;
      } else if (title.includes(inputTextConverted)) {
        return el;
      }
    });
    props.filterFunc(filtered_array);
    props.clearhandle();
    console.log(filtered_array);
  };

  return (
    <Box className={classes.inputDiv}>
      <h4>{props.title}</h4>
      <input
        placeholder={props.placeholder}
        ref={props.refProp}
        type={inputType}
      />
      <button onClick={filterHandler}>
        <SearchIcon className={classes.searchIcn} />
      </button>
    </Box>
  );
};

const styles = {
  heading: {
    fontWeight: 800,
    color: "white",
    fontFamily: "Manrope",
    paddingTop: 1,
    "@media only screen and (min-width: 280px) and (max-width: 576px)": {
      display: "block",
      fontSize: 17,
    },
    "@media only screen and (min-width: 576px) and (max-width: 720px)": {
      display: "block",
      fontSize: 20,
    },
  },
};

const FilterDiv = () => {
  const runningNotesArray = useSelector(
    (state) => state.sliceOne.proprietors_running_Notes_Array
  );

  const dispatch = useDispatch();

  const title_ref = useRef("");
  const amount_ref = useRef(" ");

  const clearRef = () => {
    title_ref.current.value = "";
    amount_ref.current.value = "";
  };

  const filterNotes = (arr) => {
    dispatch(sliceOneActions.notesArray_change(arr));
  };
  return (
    <>
      <Box>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Typography variant="h5" margin={"auto"} sx={styles.heading}>
            FILTER
          </Typography>
        </Box>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box className={classes.inpBox}>
            <HelperFilterInput
              title="Note title"
              placeholder="Note title"
              notes={runningNotesArray}
              refProp={title_ref}
              clearhandle={clearRef}
              filterFunc={filterNotes}
            />
            <HelperFilterInput
              clearhandle={clearRef}
              title="Amount"
              refProp={amount_ref}
              placeholder=" Amount/ ex - 3,XXX"
              notes={runningNotesArray}
              type="number"
              filterFunc={filterNotes}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FilterDiv;
