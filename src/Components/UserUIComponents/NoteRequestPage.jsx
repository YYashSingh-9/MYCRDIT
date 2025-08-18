import classes from "./NoteRequestPage.module.css";
import Spinner from "../AdditionalComponents/Spinner";
import NoteRequestItem from "../AdditionalComponents/NoteRequestItem";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import NotLoggedInLandingPage from "../AdditionalComponents/NotLoggedInLandingPage";
import WhenNoItemToDisplay from "../AdditionalComponents/WhenNoItemToDisplay";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { sliceOneActions } from "../../Store/sliceOne";
import { get_notes_handler } from "../../Store/actionCreatorThunk";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast, Slide } from "react-toastify";

const toastFn = (message) => {
  return toast(`${message}`, {
    position: "top-right",
    hideProgressBar: true,
    autoClose: 3000,
    transition: Slide,
  });
};

const NoteRequestPage = () => {
  let accType,
    userCookie,
    id_String,
    backLink_Id,
    pending_notes_array,
    isNoteRequests_availabe;
  const userData = useSelector((state) => state.sliceOne.accountUserData);
  const noteRequestsArray = useSelector(
    (state) => state.sliceOne.customerNote_requests
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  id_String = id.split(",");
  accType = id_String[0];
  userCookie = id_String[1];
  backLink_Id = `${accType},${userCookie}`;

  const { mutate, data, isPending } = useMutation({
    mutationKey: ["note-requests"],
    mutationFn: () => {
      return get_notes_handler(
        userCookie,
        "non-accepted-notes",
        userData.data.contactNumber
      );
    },
  });

  if (data && data.status === "Success") {
    pending_notes_array = data.data;
    isNoteRequests_availabe = true;
    dispatch(sliceOneActions.note_requests_insert_handler(data.data));
  }

  const acceptingRequestHandler = () => {
    mutate();
    toastFn("Note accepted. 👍");
  };

  useEffect(() => {
    if (userData.status === "Success") {
      mutate();
    }
  }, [userData]);

  let loginState = userData.status === "Success" ? true : false;

  return (
    <>
      {loginState === true ? (
        <BasicCoverDiv
          heading={"Your"}
          heading_highlight={" Pending requests."}
        >
          {data &&
          data.status === "Success" &&
          noteRequestsArray.length === 0 ? (
            <WhenNoItemToDisplay
              userName={userData.data.customerName}
              title={"empty request box."}
              subtitle={"NO Pending requests are here to accept for now.!"}
            />
          ) : isPending ? (
            <Spinner />
          ) : (
            <>
              <Box className={classes.innerCover}>
                {data &&
                  data.status === "Success" &&
                  noteRequestsArray.map((el) => (
                    <NoteRequestItem
                      data={el}
                      cookie={userCookie}
                      clickFn={acceptingRequestHandler}
                    />
                  ))}
              </Box>
              <Box mb={1.5}>
                <Link to={`/your-account-details/${backLink_Id}`}>
                  <GeneralButton iconTitle="bacck" btn_title="Back" />
                </Link>
              </Box>
            </>
          )}
          <ToastContainer />
        </BasicCoverDiv>
      ) : (
        <NotLoggedInLandingPage
          heading="Occured"
          highlight_text=" some error"
          linkk="/"
          btnTitle="Home"
        />
      )}
    </>
  );
};

export default NoteRequestPage;
