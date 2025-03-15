import { Grid, Box } from "@mui/material";
import classes from "./DebtDetails.module.css";
import { ArrowLeft } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import InitialSlider from "../AdditionalComponents/InitialSlider";
import DetailedNote from "../AdditionalComponents/DetailDebtNote";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const DebtDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  console.log(id);

  let isFormActive = false;

  location.pathname === "/:id/details/add-note"
    ? (isFormActive = true)
    : (isFormActive = false);
  return (
    <>
      {isFormActive === false && (
        <>
          {" "}
          <InitialSlider />
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.main}
          >
            <Grid
              item
              lg={12}
              sm={12}
              md={12}
              xs={12}
              className={classes.headBar}
            >
              <header className={classes.title}>
                <h3>Debt Note of Mishra ji</h3>
              </header>
            </Grid>
            <Grid
              item
              lg={12}
              sm={12}
              md={12}
              xs={12}
              className={classes.addBtn}
            >
              <Link to="/:id/details/add-note">
                <button>
                  <EditIcon className={classes.iccn} />
                  Add
                </button>
              </Link>
              <Link to={".."}>
                <button>
                  <ArrowLeft className={classes.iccn} />
                  Back
                </button>
              </Link>
            </Grid>
            <hr
              style={{
                width: "100%",
                height: "0.1rem ",
                backgroundColor: "rgb(211, 211, 211 )",
                borderRadius: "1rem",
                outline: "none",
                border: "none",
                marginTop: "0rem",
                marginBottom: "1rem",
              }}
            />
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
      )}

      <Outlet />
    </>
  );
};

export default DebtDetailsPage;
