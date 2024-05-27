import classes from "./RunningDebts.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { ListItem } from "./HistoryPage";
import { Grid } from "@mui/material";
const RunningDebtsPage = () => {
  return (
    <>
      <BasicCoverDiv heading={"Your"} heading_highlight={" Running debts."}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          marginBottom={3}
          className={classes.detailsBox}
        >
          <ListItem
            title={"Mishra ji,Sunflower oil"}
            date={"14-06-24"}
            amt={250}
            btnTitle={"pending"}
          />
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default RunningDebtsPage;
