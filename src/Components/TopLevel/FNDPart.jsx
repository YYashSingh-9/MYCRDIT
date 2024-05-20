import { useSelector } from "react-redux";
import DebtNotesContainer from "./DebtNotesContainer";
import FilterContainer from "./FilterContainer";
import MainContainer from "../UserUIComponents/MainContainer";
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
      {currentAcc_Type === "proprietor" ? (
        <ProprietorComponent />
      ) : (
        <UserAccountComponent />
      )}
    </>
  );
};

export default Filter_n_Debts;
