import { Box } from "@mui/material";
import classes from "./InitialSlider.module.css";
import { createPortal } from "react-dom";

const portal = document.getElementById("backdrop");

const InitialSlider = () => {
  return (
    <>{createPortal(<Box className={classes.mainSlider}></Box>, portal)}</>
  );
};

export default InitialSlider;
