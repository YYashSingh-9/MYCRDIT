import Header from "./Components/TopLevel/Header";
import FilterContainer from "./Components/TopLevel/FilterContainer";
import DebtNotesContainer from "./Components/TopLevel/DebtNotesContainer";
import { Outlet } from "react-router-dom";
import Footer from "./Components/TopLevel/Footer";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "./Store/actionCreatorThunk";

function App() {
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
