import { Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./DetailDebtNote.module.css";

const DetailedNote = (props) => {
  return (
    <>
      <Grid
        item
        lg={12}
        sm={12}
        md={12}
        xs={12}
        className={classes.parentContainer}
      >
        <Box className={classes.infoContainer}>
          <table className={classes.infoBox}>
            <tr className={classes.row}>
              <td>Customer Name :</td>
              <td>Alokik Mishra</td>
            </tr>
            <tr className={classes.row}>
              <td>Customer Number :</td>
              <td>9876498033</td>
            </tr>
            <tr className={classes.row}>
              <td>Product :</td>
              <td>Kingfisher beer</td>
            </tr>
            <tr className={classes.row}>
              <td>Amount :</td>
              <td>250/-</td>
            </tr>
            <tr className={classes.row}>
              <td>Date of Purchase</td>
              <td>14-05-2024</td>
            </tr>
          </table>
        </Box>
        <Box className={classes.btnContainer}>
          <button className={classes.del}>Delete</button>
          <button> Paid </button>
          <Link to={"/"}>
            <button className={classes.lnkbtn}>Back</button>
          </Link>
        </Box>
        <hr style={{ width: "80%", marginTop: "1rem" }} />
      </Grid>
    </>
  );
};

export default DetailedNote;
