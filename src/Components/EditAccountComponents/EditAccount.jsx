import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import classes from "./EditAccount.module.css";
import { TextField, Box } from "@mui/material";
import { Form, Link } from "react-router-dom";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import NotLoggedInLandingPage from "../AdditionalComponents/NotLoggedInLandingPage";

const EditCustomer = (props) => {
  const { titleNHtmlFor, bck_btnLink, loginState, info } = props;

  const link_ = `/your-account-details/${bck_btnLink}`;
  const userData = bck_btnLink;

  return (
    <>
      {loginState ? (
        <BasicCoverDiv heading={"Update"} heading_highlight={" account"}>
          <Form method="POST" className={classes.form_main}>
            {titleNHtmlFor.map((el, i) => {
              let val = el === "name" ? info.name : info.contactNumber;

              return (
                <Box key={i}>
                  <label htmlFor={el}>{el}</label>
                  <br />

                  <TextField id="outlined" defaultValue={val} name={el} />
                  <hr />
                </Box>
              );
            })}

            <Box className={classes.btnBox}>
              <GeneralButton
                typeBtn="submit"
                btn_title="Save"
                name="user-data"
                value={userData}
              />
              <Link to={link_}>
                <GeneralButton typeBtn="button" btn_title="Back" />
              </Link>
            </Box>
          </Form>
        </BasicCoverDiv>
      ) : (
        <NotLoggedInLandingPage
          heading="Occured"
          highlight_text="some error"
          linkk="/"
          btnTitle="Home"
        />
      )}
    </>
  );
};

export default EditCustomer;
