import React from "react";
import ReactDOM from "react-dom/client";
// навігація по сторінках
import { BrowserRouter } from "react-router-dom";
// стилі
import "./index.css";
// компоненти
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/classifier">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
