import classes from "./Components/AdditionalComponents/App.module.css";
import Header from "./Components/TopLevel/Header";
import Footer from "./Components/TopLevel/Footer";
import { Box } from "@mui/material";
import { client } from "./Store/actionCreatorThunk";
import { Outlet } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

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
