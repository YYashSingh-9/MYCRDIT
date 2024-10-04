import classes from "./OTPpage.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import { Grid, TextField, Box } from "@mui/material";
import GeneralButton from "../AdditionalComponents/GeneralButton";
import { Form, Link } from "react-router-dom";

const OTPpage = () => {
  return (
    <>
      <BasicCoverDiv
        heading={"Enter your"}
        heading_highlight={"OTP"}
      ></BasicCoverDiv>
    </>
  );
};

export default OTPpage;
