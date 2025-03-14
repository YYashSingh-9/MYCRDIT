import { useNavigate, useLocation } from "react-router-dom";
import { getAllCustomerNotes, client } from "../../Store/actionCreatorThunk";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "@mui/icons-material";
import { Grid, Box } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import classes from "./DebtDetails.module.css";
import InitialSlider from "../AdditionalComponents/InitialSlider";
import DetailedNote from "../AdditionalComponents/DetailDebtNote";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const DebtDetailsPage = () => {
  let isFormActive = false;
  const allNotes = useSelector(
    (state) => state.sliceOne.proprietors_running_Notes_Array
  );
  const cookie = useSelector((state) => state.sliceOne.accountUserCookie);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  location.pathname === "/:id/details/add-note"
    ? (isFormActive = true)
    : (isFormActive = false);

  const currentNote = allNotes.filter((el) => el._id === id)[0];
  console.log(currentNote);

  const { mutate, data, isLoading } = useMutation({
    mutationKey: ["note-details"],
    mutationFn: () => {
      return getAllCustomerNotes(currentNote.customerNumber, cookie);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["note-details"]);
    },
  });

  useEffect(() => {
    mutate();
  }, [id]);
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
