import {
  Form,
  Link,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sliceOneActions } from "../../Store/sliceOne";
import { Box, TextField } from "@mui/material";
import { useEffect } from "react";
import classes from "./EditForm.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import NotLoggedInLandingPage from "../AdditionalComponents/NotLoggedInLandingPage";
import Spinner from "../AdditionalComponents/Spinner";
import { ToastContainer, toast, Slide } from "react-toastify";

const toastFn = (message) => {
  return toast(`${message}`, {
    position: "top-right",
    hideProgressBar: true,
    autoClose: 3000,
    transition: Slide,
  });
};

const EditForm = () => {
  const userAccountData = useSelector(
    (state) => state.sliceOne.accountUserData
  );
  const accType = useSelector((state) => state.sliceOne.accountType);
  const navigation = useNavigation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useActionData();
  const userInfo = userAccountData.data;
  const data_toSend = userAccountData.token;
  console.log(data);

  useEffect(() => {
    if (data) {
      if (data.status === "Success") {
        dispatch(sliceOneActions.updateUserStoredInfo_handler(data));
        console.log(data);
        dispatch(sliceOneActions.shopDetailsEditStateSetter());
        navigate("/my-shop-info");
      }
    }
  }, [data]);

  return (
    <>
      {accType === "proprietor" ? (
        <BasicCoverDiv
          heading={"Update your"}
          heading_highlight={" Information"}
        >
          {navigation.state === "submitting" ? (
            <Spinner />
          ) : (
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

              <TextField id="outlined" name="gst_number" />
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
          )}
          <ToastContainer />
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
