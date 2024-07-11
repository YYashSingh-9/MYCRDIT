import classes from "./ProprietorSignupForm.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { Form, Link } from "react-router-dom";
import { Grid, TextField, OutlinedInput, InputAdornment } from "@mui/material";
import { useSelector } from "react-redux";
import NotLoggedInLandingPage from "../AdditionalComponents/NotLoggedInLandingPage";

const ProprietorSignupForm = () => {
  const currentAcc_Type = useSelector((state) => state.sliceOne.accountType);

  return (
    <>
      <BasicCoverDiv heading={"Signup as "} heading_highlight={"Proprietor."}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.formContainer}
        >
          <Form method="POST" className={classes.form_main}>
            <label htmlFor="Shop Name">Shop Name</label>
            <br />
            <TextField id="outlined" />
            <hr />
            <label htmlFor="Shop address">Shop Address</label>
            <br />
            <TextField id="outlined" />
            <br />
            <br />

            <label htmlFor="States">Select State</label>
            <select
              name="Select state"
              id="states"
              className={classes.stateSelector}
            >
              <option value={"Andhra Pradesh"}>Andhra Pradesh</option>
              <option value={"Arunachal Pradesh"}>Arunachal Pradesh</option>
              <option value={"Assam"}>Assam</option>
              <option value={"Bihar"}>Bihar</option>
              <option value={"Chhattisgarh"}>Chhattisgarh</option>
              <option value={"Goa"}>Goa</option>
              <option value={"Gujarat"}>Gujarat</option>
              <option value={"Haryana"}>Haryana</option>
              <option value={"	Himachal Pradesh"}> Himachal Pradesh</option>
              <option value={"Jharkhand"}>Jharkhand</option>
              <option value={"Karnataka"}>Karnataka</option>
              <option value={"Kerala"}>Kerala</option>
              <option value={"Madhya Pradesh"}>Madhya Pradesh</option>
              <option value={"Maharashtra"}>Maharashtra</option>
              <option value={"Manipur"}>Manipur</option>
              <option value={"Meghalaya"}>Meghalaya</option>
              <option value={"Mizoram"}>Mizoram</option>
              <option value={"Nagaland"}>Nagaland</option>
              <option value={"Odisha"}>Odisha</option>
              <option value={"Punjab"}>Punjab</option>
              <option value={"Rajasthan"}>Rajasthan</option>
              <option value={"Sikkim"}>Sikkim</option>
              <option value={"Tamil Nadu"}>Tamil Nadu</option>
              <option value={"Telangana"}>Telangana</option>
              <option value={"Tripura"}>Tripura</option>
              <option value={"Uttar Pradesh"}>Uttar Pradesh</option>
              <option value={"Uttarakhand"}>Uttarakhand</option>
              <option value={"	West Bengal"}> West Bengal</option>
            </select>
            <br />
            <label htmlFor="pincode">Pincode</label>
            <br />
            <input type="number" name="pincode" />
            <br />
            <label htmlFor="City">City</label>
            <br />
            <TextField id="outlined" />
            <hr />

            <label htmlFor="Shop Category">Your Shop Category</label>

            <select
              name="Select state"
              id="states"
              className={classes.stateSelector}
            >
              <option value={"Daily Needs"}>Daily needs</option>
              <option value={"Groceries"}>Groceries</option>
              <option value={"Auto parts and repairing"}>
                Auto parts and repairing
              </option>
              <option value={"Clothing and fashion"}>
                Clothing and fashion
              </option>
              <option value={"Jewellery"}>Jewellery</option>
              <option value={"Stationary"}>Stationary</option>
              <option value={"Books"}>Books</option>
              <option value={"Pet Shop"}>Pet Shop</option>
              <option value={"Sports Shop"}>Sports Shop</option>
              <option value={"Automobile"}>Automobile</option>
              <option value={"Pooja Shop"}>Pooja Shop</option>
              <option value={"Vegitable Shop"}>Vegitable Shop</option>
              <option value={"Electronics"}>Electronics</option>
              <option value={"Footwear"}>Footwear</option>
              <option value={"Flower gifts and cake"}>
                Flower Gifts and cake
              </option>
              <option value={"Electronics and computer accessories"}>
                Electronics and computer accessories
              </option>
              <option value={"Hardware and steel"}>Hardware and steel</option>
            </select>
            <hr />
            <label htmlFor="other shop category">Other Shop Category.</label>
            <br />
            <TextField id="outlined" />
            <hr />
            <label htmlFor="Contact number">Contact Number.</label>
            <br />
            <OutlinedInput
              id="Contact-number"
              startAdornment={
                <InputAdornment position="start">+91</InputAdornment>
              }
              label="Amount"
            />
            <br />
            <label htmlFor="Proprietor name">Proprietor Name.</label>
            <br />
            <TextField id="Outlined" />
            <br />
            <label htmlFor="Proprietor name">Your Password.</label>
            <br />
            <TextField id="Outlined" />
            <br />
            <label htmlFor="Proprietor name">Confirm Password.</label>
            <br />
            <TextField id="Outlined" />
            <br />
            <label htmlFor="question">What is your most selling product.</label>
            <br />
            <TextField id="Outlined" />
            <br />
            <label htmlFor="question">
              What is your least selling product.
            </label>
            <br />
            <TextField id="Outlined" />
            <br />

            <label htmlFor="question">
              Product or service you want in your shop, but is not available
              right now
            </label>
            <br />
            <TextField id="Outlined" />
            <br />
            <label htmlFor="GST number">
              Your GST number{`(if available)`}
            </label>
            <br />
            <TextField id="Outlined" />
            <br />
            <button type="submit">Save</button>
          </Form>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.toggleText}
        >
          <Link to={"/login"}>
            <h4 className={classes.formH4}>
              Already signed up?{" "}
              <span style={{ color: "#1DB954", fontFamily: "poppins" }}>
                Log in then
              </span>
            </h4>
          </Link>
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default ProprietorSignupForm;
