import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import FNDPart from "./Components/TopLevel/FNDPart.jsx";
import "./index.css";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import mainStore from "./Store/mainStore.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <FNDPart /> }],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
