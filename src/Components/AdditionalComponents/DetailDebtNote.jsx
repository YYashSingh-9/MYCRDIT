import { Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./DetailDebtNote.module.css";
import { useNavigate } from "react-router-dom";

const DetailedNote = (props) => {
  const navigate = useNavigate();
  const note_Data = props.data;
  let acceptanceStatus, date, disableStatus;

  date = new Date(note_Data.date).toISOString().substring(0, 10);

  acceptanceStatus =
    note_Data.acceptanceStatus === false ? "Not accepted" : "Accepted";

  disableStatus = note_Data.acceptanceStatus === false ? true : false;

  const buttonClass =
    note_Data.acceptanceStatus === false
      ? classes.disableClass
      : classes.normalClass;
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
          <h3>{note_Data.noteTitle}</h3>
        </span>
        <Box className={classes.infoContainer}>
          <table className={classes.infoBox}>
            <tbody>
              <tr className={classes.row}>
                <td>Customer Name :</td>
                <td>{note_Data.customerName}</td>
              </tr>
              <tr className={classes.row}>
                <td>Customer Number :</td>
                <td>{note_Data.customerNumber}</td>
              </tr>
              <tr className={classes.row}>
                <td>Product :</td>
                <td>{note_Data.productName}</td>
              </tr>
              <tr className={classes.row}>
                <td>Amount :</td>
                <td>{note_Data.amount}/-</td>
              </tr>
              <tr className={classes.row}>
                <td>Date of Purchase</td>
                <td>{date}</td>
              </tr>
              <tr className={classes.row}>
                <td>Accepted</td>
                <td>{acceptanceStatus}</td>
              </tr>
            </tbody>
          </table>
        </Box>
        <Box className={classes.btnContainer}>
          <button className={classes.del}>Delete</button>
          <button disabled={disableStatus} className={buttonClass}>
            {" "}
            Paid{" "}
          </button>
        </Box>
      </Grid>
      <hr style={{ width: "80%", marginTop: "2rem", marginBottom: "2rem" }} />
    </>
  );
};

export default DetailedNote;
