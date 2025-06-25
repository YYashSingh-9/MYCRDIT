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
import OTPpage from "./Components/SignupAndAuthentication/OTPpage.jsx";
import NoteRequestPage from "./Components/UserUIComponents/NoteRequestPage.jsx";
import CustomerAccountEdit from "./Components/EditAccountComponents/CustomerAccountEdit.jsx";
import ProprietorAccountEdit from "./Components/EditAccountComponents/ProprietorAccountEdit.jsx";
import MCScorePage from "./Components/UserUIComponents/MCScorePage.jsx";
import "./index.css";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import mainStore from "./Store/mainStore.jsx";
// Action and loader functions
import {
  login_signup_fetchRequest,
  createNote_Handler,
  editShopInfo_Handler,
  reviewSendHandler,
  edit_user_info,
} from "./Store/actionCreatorThunk.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <FNDPart /> },
      {
        path: "/add-debt-note-form",
        element: <FormMain />,
        action: createNote_Handler,
      },
      {
        path: "/:id/details",
        element: <DebtDetailsPage />,
        children: [
          {
            path: "/:id/details/add-note",
            element: <FormMain />,
            action: createNote_Handler,
          },
        ],
      },
      { path: "/your-account-details/:id", element: <AccountPage /> },
      { path: "/your-history-details/:id", element: <HistoryPage /> },
      {
        path: "/proprietor-signup-form",
        element: <ProprietorSignupForm />,
        action: login_signup_fetchRequest,
      },
      {
        path: "/customer-signup-form",
        element: <CustomerSignupForm />,
        action: login_signup_fetchRequest,
      },
      {
        path: "/login",
        element: <LoginPage />,
        action: login_signup_fetchRequest,
      },
      { path: "/otp-authentication", element: <OTPpage /> },
      { path: "/my-shop-info", element: <ShopInfo /> },
      { path: "/my-running-debts", element: <RunningDebtsPage /> },
      { path: "/bts-mycrdit-score/:id", element: <MCSPage /> },
      {
        path: "/review-form",
        element: <ReviewNFeedback />,
        action: reviewSendHandler,
      },
      {
        path: "/edit-shop-details",
        element: <EditForm />,
        action: editShopInfo_Handler,
      },
      { path: "/my-note-requests/:id", element: <NoteRequestPage /> },
      {
        path: "/edit-customer-info",
        element: <CustomerAccountEdit />,
        action: edit_user_info,
      },
      {
        path: "/edit-proprietor-info",
        element: <ProprietorAccountEdit />,
        action: edit_user_info,
      },
      { path: "/my-current-mcs", element: <MCScorePage /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={mainStore}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
