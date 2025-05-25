import classes from "./EditAccount.module.css";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import NotLoggedInLandingPage from "../AdditionalComponents/NotLoggedInLandingPage";
import { useActionData, useNavigate, useNavigation } from "react-router-dom";
import { sliceOneActions } from "../../Store/sliceOne";
import { TextField, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { Form, Link } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "../AdditionalComponents/Spinner";

const EditCustomer = (props) => {
  const { titleNHtmlFor, bck_btnLink, loginState, info } = props;
  const action_data = useActionData();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const link_ = `/your-account-details/${bck_btnLink}`;
  const userData = bck_btnLink;

  useEffect(() => {
    if (action_data) {
      if (action_data.status === "Success") {
        console.log(action_data);
        dispatch(sliceOneActions.updateUserStoredInfo_handler(action_data));
        navigate(link_);
      }
    }
  }, [action_data]);
  console.log(info);
  return (
    <>
      {loginState ? (
        <BasicCoverDiv heading={"Update"} heading_highlight={" account"}>
          {navigation.state === "loading" ? (
            <Spinner />
          ) : (
            <Form method="POST" className={classes.form_main}>
              {titleNHtmlFor.map((el, i) => {
                let val = el === "Name" ? info.name : info.contactNumber;

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
          )}
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
