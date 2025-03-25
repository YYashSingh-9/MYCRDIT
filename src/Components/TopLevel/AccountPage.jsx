import { Grid } from "@mui/material";
import classes from "./AccountPage.module.css";
import AccountInfoPart from "../AdditionalComponents/AccountInfoPart";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { useSelector } from "react-redux";
import InitialSlider from "../AdditionalComponents/InitialSlider";
import { useEffect } from "react";
import { sliceOneActions } from "../../Store/sliceOne";
import { useParams } from "react-router-dom";

const AccountPage = () => {
  const accType = useSelector((state) => state.sliceOne.accountType);
  const cookie = useSelector((state) => state.sliceOne.accountUserCookie);
  const id = useParams();
  useEffect(() => {
    sliceOneActions.userStorageInfo_Get_handler();
    console.log(accType);
  }, [accType]);
  return (
    <>
      <BasicCoverDiv heading="Account of" heading_highlight=" Alokik">
        <Grid item lg={12} md={12} xs={12} sm={12} className={classes.infoPart}>
          <AccountInfoPart accountType={accType} />
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default AccountPage;
