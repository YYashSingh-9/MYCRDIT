import classes from "./ReviewNFeedback.module.css";
import BasicCoverDiv from "./BasicCoverDiv";
import { Box, Grid, TextField } from "@mui/material";
import { Form } from "react-router-dom";

const ReviewNFeedback = () => {
  return (
    <>
      <BasicCoverDiv heading={"Share Your"} heading_highlight={" View."}>
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
            Here you can share your complains, reviews and feedback for any
            brand which you purchase we try to give this information to the
            company you are sharing views for so that they can understand your
            views properly and provide better product/services
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
            <TextField id="outlined" />
            <br />
            <label htmlFor="Your Issue">Your Issue title</label>
            <br />
            <TextField id="outlined" />

            <br />
            <br />
            <textarea htmlFor="Issue explained" />
            <br />
            <button type="submit">Send</button>
          </Form>
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default ReviewNFeedback;
