import { Box } from "@mui/material";
import classes from "./NoteRequestPage.module.css";
import NoteRequestItem from "../AdditionalComponents/NoteRequestItem";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import { Link, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const NoteRequestPage = () => {
  let accType, userCookie, id_String, backLink_Id;

  const { id } = useParams();
  id_String = id.split(",");
  accType = id_String[0];
  userCookie = id_String[1];

  const { mutate, data, isPending } = useMutation();

  backLink_Id = `${accType},${userCookie}`;

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
        <Box mb={1.5}>
          <Link to={`/your-account-details/${backLink_Id}`}>
            <GeneralButton iconTitle="bacck" btn_title="Back" />
          </Link>
        </Box>
      </BasicCoverDiv>
    </>
  );
};

export default NoteRequestPage;
