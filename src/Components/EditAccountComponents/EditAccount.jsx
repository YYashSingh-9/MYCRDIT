import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import classes from "./EditAccount.module.css";
import { TextField, Box } from "@mui/material";
import { Form, Link } from "react-router-dom";
import GeneralButton from "../AdditionalComponents/GeneralButton";

const EditCustomer = (props) => {
  const { titleNHtmlFor, bck_btnLink } = props;
  return (
    <>
      <BasicCoverDiv heading={"Update"} heading_highlight={" account"}>
        <Form method="POST" className={classes.form_main}>
          {titleNHtmlFor.map((el, i) => {
            return (
              <Box key={i}>
                <label htmlFor={el}>{el}</label>
                <br />

                <TextField id="outlined" />
                <hr />
              </Box>
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
