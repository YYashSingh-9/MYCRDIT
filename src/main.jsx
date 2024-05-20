import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import FNDPart from "./Components/TopLevel/FNDPart.jsx";
import FormMain from "./Components/AdditionalComponents/FormMain.jsx";
import DebtDetailsPage from "./Components/TopLevel/DebtDetailsPage.jsx";
import AccountPage from "./Components/TopLevel/AccountPage.jsx";
import "./index.css";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import mainStore from "./Store/mainStore.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <FNDPart /> },
      { path: "/add-debt-note-form", element: <FormMain /> },
      { path: "/:id/details", element: <DebtDetailsPage /> },
      { path: "/your-account-details", element: <AccountPage /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
