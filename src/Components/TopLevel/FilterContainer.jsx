import { Box } from "@mui/material";
import classes from "./FilterContainer.module.css";
import FilterDiv from "../AdditionalComponents/FiltersDiv";

const NotesListContainer = () => {
  return (
    <>
      <Box className={classes.NotesListContainerBackground}>
        <FilterDiv />
      </Box>
    </>
  );
};

export default NotesListContainer;
