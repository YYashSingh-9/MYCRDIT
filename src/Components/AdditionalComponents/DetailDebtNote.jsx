import { Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./DetailDebtNote.module.css";
import { useNavigate } from "react-router-dom";

const DetailedNote = (props) => {
  const navigate = useNavigate();

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
        <span className={classes.noteTitle}>
          <h3>Customer account Debt no - 1</h3>
        </span>
        <Box className={classes.infoContainer}>
          <table className={classes.infoBox}>
            <tbody>
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
            </tbody>
          </table>
        </Box>
        <Box className={classes.btnContainer}>
          <button className={classes.del}>Delete</button>
          <button> Paid </button>
          <button className={classes.lnkbtn}>
            <Link to={navigate(-1)}>Back</Link>
          </button>
        </Box>
      </Grid>
      <hr style={{ width: "80%", marginTop: "2rem", marginBottom: "2rem" }} />
    </>
  );
};

export default DetailedNote;
