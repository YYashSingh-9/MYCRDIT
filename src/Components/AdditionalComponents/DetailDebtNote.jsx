import { Grid, Box } from "@mui/material";
import classes from "./DetailDebtNote.module.css";

const DetailedNote = (props) => {
  const note_Data = props.data;
  let acceptanceStatus,
    date,
    disableStatus,
    dateFe,
    dateDef,
    currentDate,
    minimum_days_status,
    time_left_ms,
    days_remaining;

  //1. Date
  date = new Date(note_Data.date).toISOString().substring(0, 10);

  //2. Accepted indicator and button disable
  acceptanceStatus =
    note_Data.acceptanceStatus === true ? "Accepted " : "Not accepted";

  disableStatus = note_Data.acceptanceStatus === false ? true : false;

  //3. Adding timer of 15 days for pay-button

  //a. Converting debt note date in ms.
  dateFe = new Date(date);
  dateDef = dateFe.getTime();
  //b. 15 days in ms
  let fifteenDays = 1000 * 60 * 60 * 24 * 15;

  //c. Finding 15 days from debt note date in ms
  let final_date_in_ms = dateDef + fifteenDays;

  //d. current date then comparing dates
  currentDate = Date.now();

  disableStatus = currentDate >= final_date_in_ms ? false : true;

  //e. Days left for 15 days completion
  let finalDate_Is_greater = final_date_in_ms >= currentDate ? true : false;

  if (finalDate_Is_greater) {
    time_left_ms = final_date_in_ms - currentDate;
    days_remaining = time_left_ms / (1000 * 60 * 60 * 24);
    days_remaining = days_remaining.toFixed(1);
  }

  minimum_days_status =
    currentDate <= final_date_in_ms
      ? `${days_remaining} days left`
      : "Completed";

  //4. Button style and title as per state.
  const buttonClass =
    note_Data.acceptanceStatus === false
      ? classes.disableClass
      : classes.normalClass;

  const btnTitle = disableStatus === true ? "Not allowed" : "Pay";

  const deleteHandler = () => {
    props.patch_func(note_Data._id, "delete");
  };
  const paying_Handler = () => {
    props.patch_func(note_Data._id, "paying");
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
              {/* <tr className={classes.row}>
                <td>Customer Name :</td>
                <td>{note_Data.customerName}</td>
              </tr> */}
              <tr className={classes.row}>
                <td>Customer Number :</td>
                <td>{note_Data.customerNumber}</td>
              </tr>
              {/* <tr className={classes.row}>
                <td>Product :</td>
                <td>{note_Data.productName}</td>
              </tr> */}
              <tr className={classes.row}>
                <td>Amount :</td>
                <td>{note_Data.amount}/-</td>
              </tr>
              <tr className={classes.row}>
                <td>Date of Purchase</td>
                <td>{date}</td>
              </tr>
              <tr className={classes.row}>
                <td>Status</td>
                <td>{acceptanceStatus}</td>
              </tr>
              <tr className={classes.row}>
                <td>15 Days Status</td>
                <td>{minimum_days_status}</td>
              </tr>
            </tbody>
          </table>
        </Box>
        <Box className={`${classes.btnContainer} ${buttonClass}`}>
          <button className={classes.del} onClick={deleteHandler}>
            Delete
          </button>
          <button disabled={disableStatus} onClick={paying_Handler}>
            {btnTitle}
          </button>
        </Box>
      </Grid>
      <hr className={classes.bottom_line} />
    </>
  );
};

export default DetailedNote;
