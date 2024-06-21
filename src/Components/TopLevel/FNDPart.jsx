import { useSelector } from "react-redux";
import DebtNotesContainer from "./DebtNotesContainer";
import FilterContainer from "./FilterContainer";
import MainContainer from "../UserUIComponents/MainContainer";
import NotLoggedInLandingPage from "../AdditionalComponents/NotLoggedInLandingPage";

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

const Filter_n_Debts = () => {
  const currentAcc_Type = useSelector((state) => state.sliceOne.accountType);
  return (
    <>
      {currentAcc_Type === "proprietor" && <ProprietorComponent />}
      {currentAcc_Type === "customer" && <UserAccountComponent />}
      {currentAcc_Type === "null" && <NotLoggedInLandingPage />}
    </>
  );
};

export default Filter_n_Debts;
