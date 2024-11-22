import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import classes from "./EditCustomer.module.css";
import { TextField, Box } from "@mui/material";
import { Form } from "react-router-dom";
import GeneralButton from "../AdditionalComponents/GeneralButton";

const EditCustomer = (props) => {
  const { titleNHtmlFor, bck_btnLink } = props;
  return (
    <>
      <BasicCoverDiv heading={"Update your"} heading_highlight={" Information"}>
        <Form method="POST" className={classes.form_main}>
          {titleNHtmlFor.map((el, i) => {
            return (
              <>
                <label htmlFor={el.titleNHtmlFor}>{el.titleNHtmlFor}</label>
                <br />

                <TextField id="outlined" />
                <hr />
              </>
            );
          })}

          <Box className={classes.btnBox}>
            <GeneralButton typeBtn="submit" btn_title="Save" />
            <Link to={"/my-shop-info"}>
              <GeneralButton typeBtn="button" btn_title="Back" />
            </Link>
          </Box>
        </Form>
      </BasicCoverDiv>
    </>
  );
};

export default EditCustomer;
