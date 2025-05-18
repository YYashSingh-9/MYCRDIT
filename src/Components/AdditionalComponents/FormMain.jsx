import {
  Box,
  Grid,
  TextField,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import classes from "./FormMain.module.css";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import Spinner from "./Spinner";
import {
  Form,
  Link,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import GeneralButton from "./GeneralButton";
import InitialSlider from "./InitialSlider";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";

const toastFn = (type, message) => {
  if (type === "error") {
    return toast(`${message}`, {
      position: "top-right",
      hideProgressBar: true,
      autoClose: 3000,
      transition: Slide,
    });
  } else if (type === "success") {
    console.log("ssss");
    return toast(`${message}`, {
      position: "top-right",
      hideProgressBar: true,
      autoClose: 3000,
      transition: Slide,
    });
  }
};

const FormMain = () => {
  let cookie, proprietorId;
  const data = useSelector((state) => state.sliceOne.accountUserData);
  const formData = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  if (data.status === "Success") {
    cookie = data.token;
    proprietorId = data.data._id;
  }
  const btnDataToSend = `${cookie},${proprietorId}`;
  console.log(formData);
  useEffect(() => {
    if (formData !== undefined) {
      if (formData.status === "Fail") {
        toastFn("error", formData.message);
        return;
      }
      if (formData.status === "Success") {
        toastFn("success", "Note created successfully");
        navigate("/");
      }
    }
  }, [formData]);
  return (
    <>
      <InitialSlider />
      {navigation.state === "submitting" ? (
        <Spinner />
      ) : (
        <>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.mainGrid}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.header}
            >
              <Box className={classes.title}>
                <FiberNewIcon className={classes.icn} />
                <h3>New Debt Note</h3>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.formDiv}
            >
              <Form method="POST" className={classes.form_main}>
                <label htmlFor="Note Title">Note title</label>
                <br />

                <TextField id="outlined" name="noteTitle" />
                <hr />
                <label htmlFor="Customer Name">Customer Name</label>
                <br />

                <TextField id="outlined" name="customerName" />
                <hr />
                <label htmlFor="Customer Number">Customer Number</label>
                <br />

                <TextField id="outlined" name="customerNumber" />
                <hr />

                <label htmlFor="Product bought on credit">
                  Product bought on credit :-
                </label>
                <br />

                <label htmlFor="Product bought on credit">
                  Brand of product
                </label>
                <br />
                <TextField id="outlined" name="productBrand" />
                <hr />
                <label htmlFor="Product bought on credit">Product name</label>
                <br />
                <TextField id="outlined" name="productName" />
                <hr />
                <label htmlFor="Amount payable">Amount</label>
                <br />
                <OutlinedInput
                  id="Amount payable"
                  name="amount"
                  startAdornment={
                    <InputAdornment position="start">₹</InputAdornment>
                  }
                  label="Amount"
                />
                <hr />
                <label htmlFor="Due date">Date</label>
                <br />
                <input type="date" id="dueDate" name="date" />
                <hr />
                <GeneralButton
                  typeBtn="submit"
                  btn_title="Save"
                  name="proprietor-data"
                  value={btnDataToSend}
                />
                <Link to={".."}>
                  <GeneralButton btn_title="Back" />
                </Link>
              </Form>
            </Grid>
          </Grid>
          <ToastContainer />
        </>
      )}
    </>
  );
};

export default FormMain;
