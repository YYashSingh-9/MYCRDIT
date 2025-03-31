import { Form, Link } from "react-router-dom";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { Box, TextField } from "@mui/material";
import classes from "./EditForm.module.css";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import { useSelector } from "react-redux";
import NotLoggedInLandingPage from "../AdditionalComponents/NotLoggedInLandingPage";

const EditForm = () => {
  const userAccountData = useSelector(
    (state) => state.sliceOne.accountUserData
  );
  const accType = useSelector((state) => state.sliceOne.accountType);
  const userInfo = userAccountData.data;

  const data_toSend = `${userAccountData.token},${userAccountData.data._id}`;

  return (
    <>
      {accType === "proprietor" ? (
        <BasicCoverDiv
          heading={"Update your"}
          heading_highlight={" Information"}
        >
          <Form method="POST" className={classes.form_main}>
            <label htmlFor="Shop Name">Shop Name</label>
            <br />

            <TextField
              id="outlined"
              defaultValue={userInfo.shopName}
              name="shopName"
            />
            <hr />
            <label htmlFor="Shop address">Shop Address</label>
            <br />

            <TextField
              id="outlined"
              defaultValue={userInfo.shopAddress}
              name="shopAddress"
            />
            <hr />
            <label htmlFor="Shop Category">Shop Category</label>
            <br />

            <TextField
              id="outlined"
              defaultValue={userInfo.shopCategory}
              name="shopCategory"
            />
            <hr />
            <label htmlFor="Contact Number">Contact Number</label>
            <br />

            <TextField
              id="outlined"
              defaultValue={userInfo.contactNumber}
              name="contactNumber"
            />
            <hr />
            <label htmlFor="Proprietor's Name">Proprietor's Name</label>
            <br />

            <TextField
              id="outlined"
              defaultValue={userInfo.ProprietorName}
              name="proprietorName"
            />
            <hr />
            <label htmlFor="GST Number">GST Number</label>
            <br />

            <TextField id="outlined" name="GST number" />
            <hr />
            <Box className={classes.btnBox}>
              <GeneralButton
                typeBtn="submit"
                btn_title="Save"
                name="proprietor-data"
                value={data_toSend}
              />
              <Link to={"/my-shop-info"}>
                <GeneralButton typeBtn="button" btn_title="Back" />
              </Link>
            </Box>
          </Form>
        </BasicCoverDiv>
      ) : (
        <NotLoggedInLandingPage
          heading="Some error occured "
          btnTitle="Home"
          linkk="/"
        />
      )}
    </>
  );
};

export default EditForm;
