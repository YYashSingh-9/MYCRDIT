import { Box, Grid } from "@mui/material";
import classes from "./ListContainer.module.css";
import { Link } from "react-router-dom";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const ListItem = (props) => {
  const noteData_Object = props.data;
  console.log(noteData_Object);
  const acceptanceStatus = noteData_Object.acceptanceStatus;
  const statusIndicator = acceptanceStatus ? (
    <span
      style={{
        color: "#1DB954",
        display: "flex",
        alignItems: "center",
      }}
    >
      <h4 style={{ color: "#1DB954", marginRight: 2 }}>Confirmed</h4>
      <DoneAllIcon style={{ transform: "scale(0.7)" }} />
    </span>
  ) : (
    <h4 style={{ color: "#f14a27" }}>Pending</h4>
  );

  return (
    <>
      <Box item xs={12} md={12} className={classes.listItem}>
        <Box className={classes.titles}>
          <Box sx={{ display: "flex" }}>
            <span className={classes.subTitle_one}>Title : </span>
            <h3 style={{ textTransform: "capitalize" }}>
              {noteData_Object.noteTitle}
            </h3>
          </Box>

          <Box sx={{ display: "flex", marginTop: 1 }}>
            <span className={classes.subTitle_two}>Amount : </span>
            <h4>{noteData_Object.amount}/-</h4>
          </Box>
          <Box sx={{ display: "flex", marginTop: 1 }}>
            <span className={classes.subTitle_two}>Accepted : </span>
            {statusIndicator}
          </Box>
        </Box>
        <Box>
          <Link to={`/${noteData_Object._id}/details`}>
            <button className={classes.listBtn}>Check details</button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

const ListContainer = (props) => {
  const listArray = props.itemArray;
  return (
    <>
      <Box className={classes.listBox}>
        {listArray.map((el, i) => {
          return <ListItem data={el} key={i} />;
        })}
        {/* <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem /> */}
      </Box>
    </>
  );
};

export default ListContainer;
