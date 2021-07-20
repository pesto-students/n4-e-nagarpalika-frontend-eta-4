/** @format */

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import { theme } from "./common/contants";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
