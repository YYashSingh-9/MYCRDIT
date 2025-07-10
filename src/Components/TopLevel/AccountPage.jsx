import { Grid } from "@mui/material";
import classes from "./AccountPage.module.css";
import AccountInfoPart from "../AdditionalComponents/AccountInfoPart";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { useDispatch, useSelector } from "react-redux";
import { sliceOneActions } from "../../Store/sliceOne";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import WhenNoItemToDisplay from "../AdditionalComponents/WhenNoItemToDisplay";
import InitialSlider from "../AdditionalComponents/InitialSlider";

const toastFn = (message) => {
  return toast(`${message}`, {
    position: "top-right",
    hideProgressBar: true,
    autoClose: 3000,
    transition: Slide,
  });
};

const AccountPage = () => {
  let id_String, cookie, accType, objectToSend, headingHighlight;

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.sliceOne.accountUserData);
  const reviewPopupState = useSelector(
    (state) => state.sliceOne.reviewPopupState
  );
  const { id } = useParams();

  id_String = id.split(",");
  accType = id_String[0];
  cookie = id_String[1];

  objectToSend = {
    accountType: accType,
    cookie: cookie,
  };
  if (userData && userData.status === "Success") {
    headingHighlight =
      accType === "customer"
        ? userData.data.customerName
        : userData.data.ProprietorName;
  }
  useEffect(() => {
    dispatch(sliceOneActions.userStorageInfo_Get_handler());
    console.log("use effect ran");
    if (reviewPopupState === true) {
      toastFn("Review sent.");
      console.log("use effect ran2");

      dispatch(sliceOneActions.reviewStateReSetter());
    }
  }, []);

  return (
    <>
      {userData && userData.status === "Success" ? (
        <BasicCoverDiv
          heading="Account of "
          heading_highlight={headingHighlight}
        >
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
            sm={12}
            className={classes.infoPart}
          >
            <AccountInfoPart data={objectToSend} user_data={userData.data} />
            <ToastContainer />
          </Grid>
        </BasicCoverDiv>
      ) : (
        <WhenNoItemToDisplay
          title="Something went wrong"
          subtitle="Loading, but you can check home if this takes too long"
          userName="pagla"
          toShowSpinner={true}
        />
      )}
    </>
  );
};

export default AccountPage;
