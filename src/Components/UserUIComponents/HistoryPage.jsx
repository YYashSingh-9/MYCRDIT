import classes from "./HistoryPage.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

const HistoryPage = () => {
  const accType = useSelector((state) => state.sliceOne.accountType);
  return (
    <>
      <BasicCoverDiv>
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.header}>
          <h1>Your {accType === "proprietor" ? "cleared debts" : "History"}</h1>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.detailsBox}
        ></Grid>
      </BasicCoverDiv>
    </>
  );
};

export default HistoryPage;
