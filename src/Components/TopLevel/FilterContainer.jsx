import { Box } from "@mui/material";
import classes from "./FilterContainer.module.css";
import FilterDiv from "../AdditionalComponents/FiltersDiv";
import NewNoteFormModal from "../AdditionalComponents/NewNoteFormModal";

const NotesListContainer = () => {
  return (
    <>
      <Box className={classes.NotesListContainerBackground}>
        <FilterDiv />
        <NewNoteFormModal />
      </Box>
    </>
  );
};

export default NotesListContainer;
