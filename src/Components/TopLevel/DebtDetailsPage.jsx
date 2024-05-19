import { Grid, Box } from "@mui/material";
import classes from "./DebtDetails.module.css";

const DebtDetailsPage = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.main}
      >
        <Grid item lg={12} sm={12} md={12} xs={12} className={classes.headBar}>
          <header className={classes.title}>
            <h3>Debt Note of Mishra ji</h3>
          </header>
        </Grid>
        <Grid
          item
          lg={12}
          sm={12}
          md={12}
          xs={12}
          className={classes.infoContainer}
        >
          <Box>
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
        </Grid>
        <Grid
          item
          lg={12}
          sm={12}
          md={12}
          xs={12}
          className={classes.btnContainer}
          marginTop={2}
        >
          <button>Delete</button>
          <button>Mark as paid</button>
        </Grid>
      </Grid>
    </>
  );
};

export default DebtDetailsPage;
