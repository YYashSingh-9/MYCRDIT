import { Box } from "@mui/material";
import classes from "./NoteRequestPage.module.css";
import NoteRequestItem from "../AdditionalComponents/NoteRequestItem";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";

const NoteRequestPage = () => {
  return (
    <>
      <BasicCoverDiv heading={"Your"} heading_highlight={" Pending requests."}>
        <NoteRequestItem />
      </BasicCoverDiv>
    </>
  );
};

export default NoteRequestPage;
