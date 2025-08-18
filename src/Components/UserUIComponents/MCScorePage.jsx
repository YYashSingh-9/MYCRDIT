import classes from "./MCScorePage.module.css";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getMycrditScore_handler } from "../../Store/actionCreatorThunk";
import BasicCoverDiv from "../AdditionalComponents/BasicCoverDiv";
import GeneraltButton from "../AdditionalComponents/GeneralButton";
import UserLevelBar from "../AdditionalComponents/UserLevelBar";
import WhenNoItemToDisplay from "../AdditionalComponents/WhenNoItemToDisplay";

const MCScorePage = () => {
  const accType = useSelector((state) => state.sliceOne.accountType);
  const currentUserData = useSelector(
    (state) => state.sliceOne.accountUserData
  );

  const { data } = useQuery({
    queryKey: ["customer-mcs"],
    queryFn: () => {
      return getMycrditScore_handler(
        currentUserData.token,
        currentUserData.data.contactNumber
      );
    },
  });

  let error_subtitle =
    data && data.status === "Fail" ? data.message : "Something went wrong.";
  return (
    <>
      {accType === "customer" ? (
        <BasicCoverDiv heading="Your " heading_highlight="MYCRDIT Score">
          {data && data.status === "Success" ? (
            <>
              <Box className={classes.parentBox}>
                <Box className={classes.childBox_one}>
                  <Box className={classes.scoreNum}>
                    <h2>{data.data.toFixed(1)}</h2>
                  </Box>
                  <Box className={classes.subTitle}>
                    <h4>
                      User{" "}
                      <span style={{ color: "#1DB954" }}>
                        {" "}
                        {currentUserData.data.customerName}'s
                      </span>{" "}
                      current score is displayed above.
                    </h4>
                  </Box>
                </Box>

                <Box className={classes.childBox_two}>
                  <UserLevelBar pts={data.data} />
                  <Box className={classes.infos}>
                    <p>
                      ▪️MCScore will increase if you regularly clear your debt
                      notes on time/within 30 days.
                    </p>
                    <br />
                    <p>
                      ▪️More the amount of debt note, higher points will be
                      credited.
                    </p>
                    <br />

                    <p>
                      ▪️Paying after 30 days duration or more than 30 days then
                      late payment point will be deducted.
                    </p>
                  </Box>
                </Box>
                <Box className={classes.childBox_three}>
                  <Link
                    to={`/your-account-details/${accType},${currentUserData.token}`}
                  >
                    <GeneraltButton btn_title="back" />
                  </Link>
                </Box>
              </Box>
            </>
          ) : (
            <WhenNoItemToDisplay
              userName={currentUserData.data.customerName}
              title={" minimum requirement not fulfilled."}
              subtitle={error_subtitle}
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
