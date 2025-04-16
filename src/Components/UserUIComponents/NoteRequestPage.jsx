import { Box } from "@mui/material";
import classes from "./NoteRequestPage.module.css";
import NoteRequestItem from "../AdditionalComponents/NoteRequestItem";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import { Link, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { get_notes_handler } from "../../Store/actionCreatorThunk";
import { useEffect } from "react";
import NotLoggedInLandingPage from "../AdditionalComponents/NotLoggedInLandingPage";
import { sliceOneActions } from "../../Store/sliceOne";
import FaceIcon from "@mui/icons-material/Face";
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
    onSuccess: () => {},
  });

  console.log(data);

  if (data && data.status === "Success") {
    pending_notes_array = data.data;
    isNoteRequests_availabe = true;
    dispatch(sliceOneActions.note_requests_insert_handler(data.data));
  }

  const anotherFunction = () => {
    mutate();
  };

  useEffect(() => {
    if (userData.status === "Success") {
      mutate();
    }
  }, [userData]);

  let loginState = userData.status === "Success" ? true : false;
  console.log(noteRequestsArray);

  return (
    <>
      {loginState === true ? (
        <BasicCoverDiv
          heading={"Your"}
          heading_highlight={" Pending requests."}
        >
          {data &&
          data.status === "Success" &&
          noteRequestsArray.length == 0 ? (
            <Box className={classes.noReqsBox}>
              <Box>
                <h2>
                  Hey{" "}
                  <span style={{ color: "#1DB954" }}>
                    {userData.data.customerName}
                  </span>
                  , empty request box.
                </h2>
                <Box>
                  <FaceIcon className={classes.faceIcn} />
                </Box>
                <p>NO Pending requests are here to accept for now.!</p>
              </Box>
              <Box className={classes.homeBtn}>
                <GeneralButton btn_title="Home" />
              </Box>
            </Box>
          ) : (
            <>
              <Box className={classes.innerCover}>
                {data &&
                  data.status === "Success" &&
                  noteRequestsArray.map((el) => (
                    <NoteRequestItem
                      data={el}
                      cookie={userCookie}
                      clickFn={anotherFunction}
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
