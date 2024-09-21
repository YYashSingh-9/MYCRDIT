import { Box, Grid } from "@mui/material";
import classes from "./ListContainer.module.css";
import { Link } from "react-router-dom";

const ListItem = () => {
  return (
    <>
      <Box item xs={12} md={12} className={classes.listItem}>
        <Box className={classes.titles}>
          <Box sx={{ display: "flex" }}>
            <h3 style={{ fontWeight: "600", marginRight: 7 }}>Note Title : </h3>
            <h3>Mishra ji, kingfisher beer</h3>
          </Box>

          <Box sx={{ display: "flex" }}>
            <h4 style={{ fontWeight: "600", marginRight: 7 }}>Amount : </h4>
            <h4>250/-</h4>
          </Box>
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
