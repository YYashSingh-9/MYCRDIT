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

const FormMain = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginTop={2}
        marginBottom={2}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.header}>
          <Box className={classes.title}>
            <FiberNewIcon className={classes.icn} />
            <h3>New Debt Note</h3>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.formDiv}>
          <Form method="POST" className={classes.form_main}>
            <InputLabel htmlFor="Customer Name">Customer Name</InputLabel>

            <TextField id="outlined" />
            <hr />
            <InputLabel htmlFor="Customer Number">Customer Number</InputLabel>

            <TextField
              id="outlined-basic"
              label="Customer Number"
              variant="outlined"
            />
            <hr />
            <InputLabel htmlFor="Product bought on credit">
              Product bought on credit
            </InputLabel>

            <TextField
              id="outlined-basic"
              label="Product Brand"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Product Name"
              variant="outlined"
            />
            <hr />
            <InputLabel htmlFor="Amount payable">Amount</InputLabel>
            <OutlinedInput
              id="Amount payable"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
            />
            <hr />
            <InputLabel htmlFor="Due date">Date</InputLabel>
            <input type="date" id="dueDate" name="Due Date" />
            <hr />
            <button type="submit">Save</button>
          </Form>
        </Grid>
      </Grid>
    </>
  );
};

export default FormMain;
