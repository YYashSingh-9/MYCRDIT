import { Grid } from "@mui/material";
import classes from "./AccountPage.module.css";
import AccountInfoPart from "../AdditionalComponents/AccountInfoPart";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { useSelector } from "react-redux";

const AccountPage = () => {
  const accType = useSelector((state) => state.sliceOne.accountType);

  return (
    <>
      <BasicCoverDiv>
        <Grid item lg={12} md={12} xs={12} sm={12} className={classes.header}>
          <h1>
            Account of{" "}
            <span style={{ color: "#1DB954", fontFamily: "poppins" }}>
              Alokik
            </span>
          </h1>
        </Grid>
        <Grid item lg={12} md={12} xs={12} sm={12} className={classes.infoPart}>
          <AccountInfoPart accountType={accType} />
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default AccountPage;
