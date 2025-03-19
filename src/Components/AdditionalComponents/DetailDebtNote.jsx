import { Grid, Box } from "@mui/material";
import classes from "./DetailDebtNote.module.css";

const DetailedNote = (props) => {
  const note_Data = props.data;
  let acceptanceStatus, date, disableStatus, cookie, accountType;

  //1. Date
  date = new Date(note_Data.date).toISOString().substring(0, 10);
  //2. Accepted indicator and button disable
  acceptanceStatus =
    note_Data.acceptanceStatus === false ? "Not accepted" : "Accepted";

  disableStatus = note_Data.acceptanceStatus === false ? true : false;

  //3. Button style and title as per state.
  const buttonClass =
    note_Data.acceptanceStatus === false
      ? classes.disableClass
      : classes.normalClass;
  const btnTitle = disableStatus === true ? "Not allowed" : "Paid";

  const deleteHandler = () => {
    props.del_func(note_Data._id);
  };

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
          <h3 style={{ textTransform: "capitalize" }}>{note_Data.noteTitle}</h3>
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
        <Box className={`${classes.btnContainer} ${buttonClass}`}>
          <button className={classes.del} onClick={deleteHandler}>
            Delete
          </button>
          <button disabled={disableStatus}> {btnTitle} </button>
        </Box>
      </Grid>
      <hr style={{ width: "80%", marginTop: "2rem", marginBottom: "2rem" }} />
    </>
  );
};

export default DetailedNote;
