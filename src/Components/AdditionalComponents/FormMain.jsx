import {
  Box,
  Grid,
  Input,
  InputLabel,
  TextField,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import classes from "./FormMain.module.css";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Form, Link } from "react-router-dom";
import GeneralButton from "./GeneralButton";
import InitialSlider from "./InitialSlider";

const FormMain = () => {
  return (
    <>
      <InitialSlider />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.mainGrid}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.header}>
          <Box className={classes.title}>
            <FiberNewIcon className={classes.icn} />
            <h3>New Debt Note</h3>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.formDiv}>
          <Form method="POST" className={classes.form_main}>
            <label htmlFor="Customer Name">Customer Name</label>
            <br />

            <TextField id="outlined" />
            <hr />
            <label htmlFor="Customer Number">Customer Number</label>
            <br />

            <TextField id="outlined" />
            <hr />

            <label htmlFor="Product bought on credit">
              Product bought on credit :-
            </label>
            <br />

            <label htmlFor="Product bought on credit">Brand of product</label>
            <br />
            <TextField id="outlined" />
            <hr />
            <label htmlFor="Product bought on credit">Product name</label>
            <br />
            <TextField id="outlined" />
            <hr />
            <label htmlFor="Amount payable">Amount</label>
            <br />
            <OutlinedInput
              id="Amount payable"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
            />
            <hr />
            <label htmlFor="Due date">Date</label>
            <br />
            <input type="date" id="dueDate" name="Due Date" />
            <hr />
            <GeneralButton typeBtn="submit" btn_title="Save" />
            <Link to={"/"}>
              <GeneralButton btn_title="Back" />
            </Link>
          </Form>
        </Grid>
      </Grid>
    </>
  );
};

export default FormMain;
