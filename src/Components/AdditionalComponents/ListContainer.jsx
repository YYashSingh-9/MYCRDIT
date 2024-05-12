import { Box, Grid } from "@mui/material";
import classes from "./ListContainer.module.css";

const ListItem = () => {
  return (
    <>
      <Box item xs={12} md={12} className={classes.listItem}>
        <Box>
          <h3>Mishra ji,sunflower oil</h3>
          <h4>14-05-12</h4>
        </Box>
        <Box>
          <button className={classes.listBtn}>Check details</button>
        </Box>
      </Box>
    </>
  );
};

const ListContainer = () => {
  return (
    <>
      <Box className={classes.listBox}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </Box>
    </>
  );
};

export default ListContainer;
