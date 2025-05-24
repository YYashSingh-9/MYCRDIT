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
  const { id } = useParams();

  id_String = id.split(",");
  accType = id_String[0];
  cookie = id_String[1];

  objectToSend = {
    accountType: accType,
    cookie: cookie,
  };

  useEffect(() => {
    dispatch(sliceOneActions.userStorageInfo_Get_handler());
  }, []);
  let headingHighlight =
    accType === "customer"
      ? userData.data.customerName
      : userData.data.ProprietorName;
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
