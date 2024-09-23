import { Grid, Box } from "@mui/material";
import classes from "./DebtDetails.module.css";
import { ArrowLeft } from "@mui/icons-material";
import { Link } from "react-router-dom";
import InitialSlider from "../AdditionalComponents/InitialSlider";
import DetailedNote from "../AdditionalComponents/DetailDebtNote";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const DebtDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <InitialSlider />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.main}
      >
        <Grid item lg={12} sm={12} md={12} xs={12} className={classes.headBar}>
          <header className={classes.title}>
            <h3>Debt Note of Mishra ji</h3>
          </header>
        </Grid>
        <Grid item lg={12} sm={12} md={12} xs={12} className={classes.addBtn}>
          <Link to="/add-debt-note-form">
            <button>
              <EditIcon className={classes.iccn} />
              Add to this a/c
            </button>
          </Link>
          <Link to={"/"}>
            <button>
              <ArrowLeft className={classes.iccn} />
              Back
            </button>
          </Link>
        </Grid>
        <Grid
          item
          lg={12}
          sm={12}
          md={12}
          xs={12}
          className={classes.parentContainer}
        >
          <DetailedNote />
          <DetailedNote />
          <DetailedNote />
          <DetailedNote />
        </Grid>
      </Grid>
    </>
  );
};

export default DebtDetailsPage;
