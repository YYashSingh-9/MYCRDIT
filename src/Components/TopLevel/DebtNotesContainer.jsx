import { Box, Container, Typography } from "@mui/material";
import classes from "./DebtNotesContainer.module.css";
import EditIcon from "@mui/icons-material/Edit";
const DebtNotesContainer = () => {
  return (
    <>
      <Box>
        <Container>
          <button className={classes.noteBtn}>
            <Typography variant="h6">Create Note</Typography>
            <EditIcon />
          </button>
        </Container>
      </Box>
    </>
  );
};

export default DebtNotesContainer;
