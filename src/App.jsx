import Header from "./Components/TopLevel/Header";
import FilterContainer from "./Components/TopLevel/FilterContainer";
import DebtNotesContainer from "./Components/TopLevel/DebtNotesContainer";
import { Outlet } from "react-router-dom";
import Footer from "./Components/TopLevel/Footer";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
