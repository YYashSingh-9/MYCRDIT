import classes from "./WhenNoItemToDisplay.module.css";
import { Box } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import GeneralButton from "./GeneralButton";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const WhenNoItemToDisplay = (props) => {
  const { title, subtitle, toShowSpinner, userName } = props;
  console.log(title, subtitle, toShowSpinner, userName);
  return (
    <>
      <Box className={classes.noReqsBox}>
        <Box>
          <h2>
            Hey <span style={{ color: "#1DB954" }}>{userName}</span>, {title}.
          </h2>
          {toShowSpinner ? (
            <Box>
              <Spinner />{" "}
            </Box>
          ) : (
            <Box>
              <FaceIcon className={classes.faceIcn} />
            </Box>
          )}

          <p>{subtitle}</p>
          <hr
            style={{
              width: "60%",
              height: "0.1rem ",
              backgroundColor: "rgb(221, 221, 221)",
              outline: "none",
              margin: "auto",
              marginTop: "1rem",
              border: "none",
              marginBottom: "2rem",
            }}
          />
        </Box>
        <Box className={classes.homeBtn}>
          <Link to={"/"}>
            <GeneralButton btn_title="Home" />
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default WhenNoItemToDisplay;
