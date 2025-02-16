import { useSelector } from "react-redux";
import DebtNotesContainer from "./DebtNotesContainer";
import FilterContainer from "./FilterContainer";
import MainContainer from "../UserUIComponents/MainContainer";
import NotLoggedInLandingPage from "../AdditionalComponents/NotLoggedInLandingPage";
import Administrator from "../Administrator/Administrator";

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
  return (
    <>
      {currentAcc_Type === "proprietor" && <ProprietorComponent />}
      {currentAcc_Type === "customer" && <UserAccountComponent />}
      {currentAcc_Type === "administrator" && <AdministratorComponent />}
      {currentAcc_Type === "null" && (
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
