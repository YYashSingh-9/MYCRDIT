import classes from "./MCScorePage.module.css";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import GeneraltButton from "../AdditionalComponents/GeneralButton";
import UserLeverBar from "../AdditionalComponents/UserLevelBar";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMycrditScore_handler } from "../../Store/actionCreatorThunk";
import WhenNoItemToDisplay from "../AdditionalComponents/WhenNoItemToDisplay";

const MCScorePage = () => {
  const userType = useSelector((state) => state.sliceOne.accountType);
  const currentUserData = useSelector(
    (state) => state.sliceOne.accountUserData
  );

  const { data, isError, isLoading } = useQuery({
    queryKey: ["customer-mcs"],
    queryFn: () => {
      return getMycrditScore_handler(
        currentUserData.token,
        currentUserData.data.contactNumber
      );
    },
  });

  let subtitle =
    data && data.status === "Fail" ? data.message : "Something went wrong.";
  return (
    <>
      {userType === "customer" ? (
        <BasicCoverDiv heading="Your " heading_highlight="MYCRDIT Score">
          {data && data.status === "Success" ? (
            <>
              <Box className={classes.parentBox}>
                <Box className={classes.childBox_one}>
                  <Box className={classes.scoreNum}>
                    <h2>1800</h2>
                  </Box>
                  <Box className={classes.subTitle}>
                    <h4>
                      Mr <span style={{ color: "#1DB954" }}> Yash's</span>{" "}
                      current score is displayed above.
                    </h4>
                  </Box>
                </Box>

                <Box className={classes.childBox_two}>
                  <UserLeverBar />
                  <Box className={classes.infos}>
                    <p>▪️some information regarding mycrdit score</p>
                    <p>▪️some information regarding mycrdit score</p>
                    <p>▪️some information regarding mycrdit score</p>
                  </Box>
                </Box>
                <Box className={classes.childBox_three}>
                  <Link to={"/your-account-details"}>
                    <GeneraltButton btn_title="back" />
                  </Link>
                </Box>
              </Box>
            </>
          ) : (
            <WhenNoItemToDisplay
              userName={currentUserData.data.customerName}
              title={" minimum requirement not fulfilled."}
              subtitle={subtitle}
            />
          )}
        </BasicCoverDiv>
      ) : (
        <p>Link not active for this account type.</p>
      )}
    </>
  );
};

export default MCScorePage;
