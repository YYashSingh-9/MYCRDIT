import { Box } from "@mui/material";
import classes from "./NoteRequestPage.module.css";
import NoteRequestItem from "../AdditionalComponents/NoteRequestItem";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";

const NoteRequestPage = () => {
  return (
    <>
      <BasicCoverDiv heading={"Your"} heading_highlight={" Pending requests."}>
        <Box className={classes.innerCover}>
          <NoteRequestItem title={"Modi kirana parle g"} date={"14-5-25"} />
          <NoteRequestItem title={"Modi kirana parle g"} date={"14-5-25"} />
          <NoteRequestItem title={"Modi kirana parle g"} date={"14-5-25"} />
          <NoteRequestItem title={"Modi kirana parle g"} date={"14-5-25"} />
          <NoteRequestItem title={"Modi kirana parle g"} date={"14-5-25"} />
          <NoteRequestItem title={"Modi kirana parle g"} date={"14-5-25"} />
          <NoteRequestItem title={"Modi kirana parle g"} date={"14-5-25"} />
          <NoteRequestItem title={"Modi kirana parle g"} date={"14-5-25"} />
          <NoteRequestItem title={"Modi kirana parle g"} date={"14-5-25"} />
          <NoteRequestItem title={"Modi kirana parle g"} date={"14-5-25"} />
        </Box>
      </BasicCoverDiv>
    </>
  );
};

export default NoteRequestPage;
