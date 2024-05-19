import { Box, Grid } from "@mui/material";
import classes from "./ListContainer.module.css";
import { Link } from "react-router-dom";

const ListItem = () => {
  return (
    <>
      <Box item xs={12} md={12} className={classes.listItem}>
        <Box>
          <h3>Mishra ji,sunflower oil</h3>
          <h4>14-05-12</h4>
        </Box>
        <Box>
          <Link to={"mishra-ji-note/details"}>
            <button className={classes.listBtn}>Check details</button>
          </Link>
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
