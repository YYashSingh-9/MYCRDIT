import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import FNDPart from "./Components/TopLevel/FNDPart.jsx";
import FormMain from "./Components/AdditionalComponents/FormMain.jsx";
import DebtDetailsPage from "./Components/TopLevel/DebtDetailsPage.jsx";
import AccountPage from "./Components/TopLevel/AccountPage.jsx";
import HistoryPage from "./Components/UserUIComponents/HistoryPage.jsx";
import ProprietorSignupForm from "./Components/SignupAndAuthentication/ProprietorSignupForm.jsx";
import CustomerSignupForm from "./Components/SignupAndAuthentication/CustomerSignupForm.jsx";
import LoginPage from "./Components/SignupAndAuthentication/LoginPage.jsx";
import ShopInfo from "./Components/AdditionalComponents/ShopInfo.jsx";
import RunningDebtsPage from "./Components/UserUIComponents/RunningDebts.jsx";
import MCSPage from "./Components/UserUIComponents/MCSPage.jsx";
import ReviewNFeedback from "./Components/AdditionalComponents/ReviewNFeedback.jsx";
import EditForm from "./Components/MinorComponents/EditForm.jsx";
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
      {
        path: "/:id/details",
        element: <DebtDetailsPage />,
        children: [{ path: "/:id/details/add-note", element: <FormMain /> }],
      },
      { path: "/your-account-details", element: <AccountPage /> },
      { path: "/your-history-details", element: <HistoryPage /> },
      { path: "/proprietor-signup-form", element: <ProprietorSignupForm /> },
      { path: "/customer-signup-form", element: <CustomerSignupForm /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/my-shop-info", element: <ShopInfo /> },
      { path: "/my-running-debts", element: <RunningDebtsPage /> },
      { path: "/my-current-score", element: <MCSPage /> },
      { path: "/review-form", element: <ReviewNFeedback /> },
      { path: "/edit-shop-details", element: <EditForm /> },
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
