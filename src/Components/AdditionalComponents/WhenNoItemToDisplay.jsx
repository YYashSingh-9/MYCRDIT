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
