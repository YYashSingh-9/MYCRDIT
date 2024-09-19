import { Grid } from "@mui/material";
import classes from "./AccountPage.module.css";
import AccountInfoPart from "../AdditionalComponents/AccountInfoPart";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { useSelector } from "react-redux";
import InitialSlider from "../AdditionalComponents/InitialSlider";

const AccountPage = () => {
  const accType = useSelector((state) => state.sliceOne.accountType);

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
