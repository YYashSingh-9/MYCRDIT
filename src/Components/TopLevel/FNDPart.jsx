import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { sliceOneActions } from "../../Store/sliceOne";
import DebtNotesContainer from "./DebtNotesContainer";
import FilterContainer from "./FilterContainer";
import MainContainer from "../UserUIComponents/MainContainer";
import NotLoggedInLandingPage from "../AdditionalComponents/NotLoggedInLandingPage";
import Administrator from "../Administrator/Administrator";
import { getHomePage_Data_Proprietor } from "../../Store/actionCreatorThunk";
import { useEffect } from "react";
const ProprietorComponent = () => {
  return (
    <>
      <FilterContainer />
      <DebtNotesContainer />
    </>
  );
};

const UserAccountComponent = () => {
  return (
    <>
      <MainContainer />
    </>
  );
};

const AdministratorComponent = () => {
  return (
    <>
      <Administrator />
    </>
  );
};

const Filter_n_Debts = () => {
  const currentAcc_Type = useSelector((state) => state.sliceOne.accountType);
  const currentUserCookie = useSelector(
    (state) => state.sliceOne.accountUserCookie
  );
  const dispatch = useDispatch();
  console.log(currentUserCookie);
  if (currentAcc_Type === "proprietor") {
    useQuery({
      queryKey: ["all-running-notes"],
      queryFn: () => {
        getHomePage_Data_Proprietor(currentUserCookie);
      },
    });
  }

  useEffect(() => {
    dispatch(sliceOneActions.userStorageInfo_Get_handler);
  });
  return (
    <>
      {currentAcc_Type === "proprietor" && <ProprietorComponent />}
      {currentAcc_Type === "customer" && <UserAccountComponent />}
      {currentAcc_Type === "administrator" && <AdministratorComponent />}
      {currentAcc_Type === "" && (
        <NotLoggedInLandingPage
          heading="Not logged in, "
          highlight_text="check and retry."
          btnTitle="login"
          linkk="/login"
        />
      )}
    </>
  );
};

export default Filter_n_Debts;
