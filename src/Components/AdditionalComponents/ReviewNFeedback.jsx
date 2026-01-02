import classes from "./ReviewNFeedback.module.css";
import BasicCoverDiv from "./BasicCoverDiv";
import { Grid, TextField } from "@mui/material";
import {
  Form,
  Link,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NotLoggedInLandingPage from "./NotLoggedInLandingPage";
import { useEffect } from "react";
import Spinner from "./Spinner";
import { sliceOneActions } from "../../Store/sliceOne";
import GeneralButton from "./GeneralButton";
import { Box } from "@mui/material";

const ReviewNFeedback = () => {
  let btnVal;
  const accType = useSelector((state) => state.sliceOne.accountType);
  const userAccountData = useSelector(
    (state) => state.sliceOne.accountUserData
  );
  const navigation = useNavigation();
  const actionData = useActionData();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const linkTo =
    accType === "proprietor"
      ? `/your-account-details/${userAccountData.token}`
      : "/";

  if (userAccountData.token) {
    btnVal = `${userAccountData.token},${userAccountData.data._id}`;
  }
  useEffect(() => {
    if (actionData)
      if (actionData.status === "Success") {
        dispatch(sliceOneActions.reviewStateToggle());

        navigate(
          `/your-account-details/${accType},${userAccountData.data._id}`
        );
      }
  }, [actionData]);
  return (
    <>
      {accType === "proprietor" ? (
        <BasicCoverDiv heading={"Share Your"} heading_highlight={" View."}>
          {navigation.state === "submitting" ? (
            <Spinner />
          ) : (
            <>
              {" "}
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                marginBottom={3}
                className={classes.disclaimerBox}
              >
                <h3>
                  Here you can share your complains, reviews and feedback for
                  any brand which you purchase, we try to give this information
                  to the company you are sharing your review for so that they
                  can understand your POV properly and provide better
                  product/services.
                </h3>
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                marginBottom={3}
                className={classes.formBox}
              >
                <Form method="POST" className={classes.syvform}>
                  <label htmlFor="Brand Name">Brand Name</label>
                  <br />
                  {/* <TextField
                    id="outlined"
                    name="brandName"
                    className={classes.inpStyle}
                    
                  /> */}
                  <input name="brandName" />
                  <br />
                  <label htmlFor="Your Issue">Your Issue title</label>
                  <br />
                  <input name="issue_title" />

                  {/* <TextField id="outlined" name="issue_title" /> */}

                  <br />
                  <br />
                  <textarea htmlFor="Issue explained" name="issue_content" />
                  <br />
                  <Box className={classes.btnBox}>
                    <GeneralButton
                      typeBtn="submit"
                      btn_title="Send"
                      name="proprietor-data"
                      value={btnVal}
                    >
                      Send
                    </GeneralButton>
                    <Link to={linkTo}>
                      <GeneralButton typeBtn="button" btn_title="Back" />
                      {/* <button className={classes.backbtn}>Back</button> */}
                    </Link>
                  </Box>
                </Form>
              </Grid>
            </>
          )}
        </BasicCoverDiv>
      ) : (
        <NotLoggedInLandingPage
          heading=" Some error occured, check home and retry. "
          btnTitle="Home"
          linkk="/"
        />
      )}
    </>
  );
};

export default ReviewNFeedback;
