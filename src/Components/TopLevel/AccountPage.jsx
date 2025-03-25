import { Grid } from "@mui/material";
import classes from "./AccountPage.module.css";
import AccountInfoPart from "../AdditionalComponents/AccountInfoPart";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

const AccountPage = () => {
  const { id } = useParams();
  let id_String, cookie, accType, objectToSend;

  id_String = id.split(",");
  accType = id_String[0];
  cookie = id_String[1];

  objectToSend = {
    accountType: accType,
    cookie: cookie,
  };

  return (
    <>
      <BasicCoverDiv heading="Account of" heading_highlight=" Alokik">
        <Grid item lg={12} md={12} xs={12} sm={12} className={classes.infoPart}>
          <AccountInfoPart data={objectToSend} />
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default AccountPage;
