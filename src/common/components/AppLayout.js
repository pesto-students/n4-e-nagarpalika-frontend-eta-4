/** @format */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// import Header from "./Header/Header";
// import Footer from "./Footer/Footer";
import SidebarNav from "./SidebarNav/SidebarNav";

import isVisibleByRoute from "../../utils/isVisibleByRoute";
import HeaderNav from "./Header/HeaderNav";

import AppLayoutContainerBackgroundImage from "../../assets/svg/AppLayoutContainerBackgroundImage.svg";

const AppLayoutContainer = styled.div`
  height: 100vh;
  background-color: #ffffff;
  background-image: url(${AppLayoutContainerBackgroundImage});
`;

const BodyContainer = styled.div`
  min-height: ${({ isHeaderEnabled }) =>
    isHeaderEnabled ? "calc(100vh - 115px)" : "100vh"};
  margin-left: ${({ isLeftNavEnabled }) =>
    isLeftNavEnabled ? "4.5rem" : "0px"};
  background-color: #ffffff;
  background-image: url(${AppLayoutContainerBackgroundImage});
`;

function AppLayout({ children }) {
  const account = useSelector(({ account }) => account);
  const location = useLocation();
  const { pathname } = location;
  const { isLoggedIn } = account;

  const isLeftNavEnabled = isVisibleByRoute(pathname, [
    "/",
    "/login",
    "/register",
  ]);
  const isHeaderEnabled = isVisibleByRoute(pathname, [
    "/",
    "/login",
    "/register",
  ]);
  // const isFooterVisible = isVisibleByRoute(pathname, ["/", "/contact-us"]);

  return (
    <AppLayoutContainer>
      {!isHeaderEnabled && isLoggedIn && <HeaderNav />}
      {!isLeftNavEnabled && isLoggedIn && <SidebarNav />}
      <BodyContainer
        isLeftNavEnabled={!isLeftNavEnabled && isLoggedIn}
        {...{ isHeaderEnabled: !isHeaderEnabled }}
      >
        {children}
      </BodyContainer>
      {/*{isFooterVisible && <Footer />}*/}
    </AppLayoutContainer>
  );
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppLayout;
