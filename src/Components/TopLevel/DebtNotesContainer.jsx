import { Box, Container, Grid, Typography } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InventoryIcon from "@mui/icons-material/Inventory";
import classes from "./DebtNotesContainer.module.css";
import EditIcon from "@mui/icons-material/Edit";
import ListContainer from "../AdditionalComponents/ListContainer";
import { Link } from "react-router-dom";

const DebtNotesContainer = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.mainContainer}
      >
        <Grid item md={12} xs={12} className={classes.headingPart}>
          <h3>
            <span style={{ color: "darkgreen" }}> Modi Kirana's</span> book
          </h3>
          <button className={classes.userTag}>
            <StorefrontIcon sx={{ marginRight: 1 }} />
            Proprietor
          </button>
          <button className={classes.userTag}>
            <InventoryIcon sx={{ marginRight: 1 }} />
            Daily Needs
          </button>
          <Link to={"/add-debt-note-form"}>
            <button className={classes.noteBtn}>
              <h4>Create Note</h4>
              <EditIcon className={classes.noteIcn} />
            </button>
          </Link>
        </Grid>
        <Grid item md={12} xs={12} lg={12} sx={{ width: "100%" }}>
          <ListContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default DebtNotesContainer;
