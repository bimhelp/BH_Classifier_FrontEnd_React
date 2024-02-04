import React from "react";
import ReactDOM from "react-dom/client";
// навігація по сторінках
import { BrowserRouter } from "react-router-dom";
// стилі
import "./index.css";
// константи
import { theme } from "./constants";
// компоненти
import App from "./App";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/classifier">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
