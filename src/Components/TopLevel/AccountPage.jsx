import { Grid } from "@mui/material";
import classes from "./AccountPage.module.css";
import AccountInfoPart from "../AdditionalComponents/AccountInfoPart";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { useDispatch, useSelector } from "react-redux";
import { sliceOneActions } from "../../Store/sliceOne";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const AccountPage = () => {
  let id_String, cookie, accType, objectToSend;
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

  let headingHighlight =
    accType === "customer"
      ? userData.data.customerName
      : userData.data.ProprietorName;

  useEffect(() => {
    dispatch(sliceOneActions.userStorageInfo_Get_handler());
    if (reviewPopupState === true)
      dispatch(sliceOneActions.reviewStateReSetter());
  }, []);

  return (
    <>
      <BasicCoverDiv heading="Account of " heading_highlight={headingHighlight}>
        <Grid item lg={12} md={12} xs={12} sm={12} className={classes.infoPart}>
          <AccountInfoPart data={objectToSend} user_data={userData.data} />
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default AccountPage;
