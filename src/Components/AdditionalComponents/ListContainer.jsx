import { Box, Grid } from "@mui/material";
import classes from "./ListContainer.module.css";
import { Link } from "react-router-dom";

const ListItem = () => {
  const acceptanceStatus = true;
  const statusIndicator = acceptanceStatus ? (
    <h4 style={{ color: "#1DB954" }}>Confirmed</h4>
  ) : (
    <h4 style={{ color: "rgb(254, 210, 87)" }}>Pending</h4>
  );

  return (
    <>
      <Box item xs={12} md={12} className={classes.listItem}>
        <Box className={classes.titles}>
          <Box sx={{ display: "flex" }}>
            <span className={classes.subTitle_one}>Title : </span>
            <h3>Mishra ji, kingfisher beer</h3>
          </Box>

          <Box sx={{ display: "flex", marginTop: 1 }}>
            <span className={classes.subTitle_two}>Amount : </span>
            <h4>250/-</h4>
          </Box>
          <Box sx={{ display: "flex", marginTop: 1 }}>
            <span className={classes.subTitle_two}>Accepted : </span>
            <h4>Confirmed</h4>
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
