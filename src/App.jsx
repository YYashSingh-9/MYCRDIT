import Header from "./Components/TopLevel/Header";
import FilterContainer from "./Components/TopLevel/FilterContainer";
import DebtNotesContainer from "./Components/TopLevel/DebtNotesContainer";
import { Outlet } from "react-router-dom";
import Footer from "./Components/TopLevel/Footer";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "./Store/actionCreatorThunk";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const currentUserCookie = useSelector(
    (state) => state.sliceOne.accountUserCookie
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUserCookie.length > 5) {
      dispatch(sliceOneActions.userStorageInfo_Get_handler());
      console.log("eheh");
    }
  }, [currentUserCookie]);
  return (
    <>
      <QueryClientProvider client={client}>
        <Header />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
