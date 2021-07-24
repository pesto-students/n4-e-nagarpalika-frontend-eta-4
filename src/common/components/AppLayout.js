/** @format */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useLocation } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SidebarNav from "./SidebarNav/SidebarNav";

import isVisibleByRoute from "../../utils/isVisibleByRoute";

const AppLayoutContainer = styled.div`
  height: 100vh;
`;

const BodyContainer = styled.div`
  min-height: calc(100vh - 115px);
  margin-left: ${({ isLeftNavEnabled }) =>
    isLeftNavEnabled ? "4.5rem" : "0px"};
`;

function AppLayout({ children }) {
  const location = useLocation();

  const { pathname } = location;
  const isLeftNavEnabled = isVisibleByRoute(pathname, ["/", "/login"]);
  const isFooterVisible = isVisibleByRoute(pathname, ["/", "/contact-us"]);

  return (
    <AppLayoutContainer>
      <Header />
      {!isLeftNavEnabled && <SidebarNav />}
      <BodyContainer isLeftNavEnabled={!isLeftNavEnabled}>
        {children}
      </BodyContainer>
      {isFooterVisible && <Footer />}
    </AppLayoutContainer>
  );
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppLayout;
