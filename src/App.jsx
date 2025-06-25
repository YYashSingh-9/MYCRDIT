import Header from "./Components/TopLevel/Header";
import FilterContainer from "./Components/TopLevel/FilterContainer";
import DebtNotesContainer from "./Components/TopLevel/DebtNotesContainer";
import { Outlet } from "react-router-dom";
import Footer from "./Components/TopLevel/Footer";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "./Store/actionCreatorThunk";
import { Box } from "@mui/material";
import classes from "./Components/AdditionalComponents/App.module.css";
function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <Box className={classes.main_body}>
          <Header />
          <Outlet />
          <Footer />
        </Box>
      </QueryClientProvider>
    </>
  );
}

export default App;
