import { getAllCustomerNotes, client } from "../../Store/actionCreatorThunk";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { sliceOneActions } from "../../Store/sliceOne";
import { useMutation } from "@tanstack/react-query";
import { ArrowLeft } from "@mui/icons-material";
import { Grid, Box } from "@mui/material";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import classes from "./DebtDetails.module.css";
import InitialSlider from "../AdditionalComponents/InitialSlider";
import DetailedNote from "../AdditionalComponents/DetailDebtNote";
import EditIcon from "@mui/icons-material/Edit";

const DebtDetailsPage = () => {
  let isFormActive = false;
  let currentNote;
  const allNotes = useSelector(
    (state) => state.sliceOne.proprietors_running_Notes_Array
  );
  const cookie = useSelector((state) => state.sliceOne.accountUserCookie);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();

  location.pathname === "/:id/details/add-note"
    ? (isFormActive = true)
    : (isFormActive = false);

  const customerNumber = Number(id.slice(-10));
  const noteId = id.slice(0, 24);
  console.log(noteId);
  const { mutate, data, isLoading } = useMutation({
    mutationKey: ["note-details"],
    mutationFn: () => {
      return getAllCustomerNotes(customerNumber, cookie);
    },
    onSuccess: () => {
      client.invalidateQueries(["note-details"]);
    },
  });
  if (data && data.status === "Success") {
    currentNote = data.data.filter((el) => el._id === noteId)[0];
    console.log(data);
  }

  console.log(currentNote);
  useEffect(() => {
    dispatch(sliceOneActions.userStorageInfo_Get_handler());
    if (cookie.length > 1) {
      mutate();
    }
  }, [id, cookie]);

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
