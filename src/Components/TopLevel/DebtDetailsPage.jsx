import {
  getAllCustomerNotes,
  client,
  patch_RequestHandler,
} from "../../Store/actionCreatorThunk";
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
import SpeakerNotesOffIcon from "@mui/icons-material/SpeakerNotesOff";
import GeneralButton from "../AdditionalComponents/GeneralButton";

const DebtDetailsPage = () => {
  let isFormActive = false;
  let arrayOfNotes = [];
  let customerName = "";
  const cookie = useSelector((state) => state.sliceOne.accountUserCookie);
  const accType = useSelector((state) => state.sliceOne.accountType);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();

  location.pathname === `/${id}/details/add-note`
    ? (isFormActive = true)
    : (isFormActive = false);

  const customerNumber = Number(id.slice(-10));

  //1. Sending patch function
  const {
    mutate: patch_requestHandle,
    data: returnData,
    isLoading: loadingState,
  } = useMutation({
    mutationKey: ["debt-note"],
    mutationFn: (props) => {
      return patch_RequestHandler(
        props.accType,
        props.data,
        props.cookie,
        props.type
      );
    },
    onSuccess: () => {
      client.invalidateQueries(["note-details"]);
    },
  });

  //2. Getting all the notes of same customer number
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
    arrayOfNotes = data.data.filter(
      (el) => el.cleared === false && el.deleted === false
    );
    if (arrayOfNotes.length >= 1) {
      customerName = arrayOfNotes[0].customerName.split(" ")[0];
    }
  }

  //3. Delete request handler
  const deleteHandler = (noteId) => {
    let obj = {
      accType: accType,
      data: { id: noteId },
      cookie: cookie,
      type: "delete",
    };
    patch_requestHandle(obj);
  };

  useEffect(() => {
    dispatch(sliceOneActions.userStorageInfo_Get_handler());
    if (cookie.length > 1) {
      mutate();
    }
  }, [id, cookie, returnData]);

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
                <h3>Debt Notes of {customerName}</h3>
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
              <Link to={`/${id}/details/add-note`}>
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
            <Grid item lg={12} sm={12} md={12} xs={12} width={"100%"}>
              <Box className={classes.infoNote}>
                <p>
                  Info : If customer hasn't accepted their debt note then paid
                  option will not be allowed.
                </p>
                <br />
                <p>
                  Paid option will also be not available till 20 days after
                  accepting the note is completed.
                </p>
              </Box>
            </Grid>
            <Grid
              item
              lg={12}
              sm={12}
              md={12}
              xs={12}
              className={classes.parentContainer}
            >
              {arrayOfNotes.length >= 1 ? (
                arrayOfNotes.map((el, i) => {
                  return (
                    <DetailedNote
                      data={el}
                      key={i}
                      cookie={cookie}
                      acc={accType}
                      del_func={deleteHandler}
                    />
                  );
                })
              ) : (
                <Box className={classes.dummyBox}>
                  {" "}
                  <h3>No debt notes to display </h3>{" "}
                  <SpeakerNotesOffIcon className={classes.dummyIcn} />
                  <Link to={".."}>
                    <GeneralButton btn_title="Home" />
                  </Link>
                </Box>
              )}
            </Grid>
          </Grid>
        </>
      )}

      <Outlet />
    </>
  );
};

export default DebtDetailsPage;
