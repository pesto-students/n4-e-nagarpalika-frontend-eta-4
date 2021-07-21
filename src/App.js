/** @format */

import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import AppLayout from "./common/components/AppLayout";
import AppRoutes from "./common/components/AppRoutes";

import { theme } from "./common/contants";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
