/** @format */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  HomeLogo,
  AddCircleOutlineLogo,
  TimelineLogo,
  HelpOutlineLogo,
} from "./Logos";

const Container = styled.div`
  width: 90px;
  height: calc(100vh - 50px);
  position: fixed;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6px 2px;
  padding: 6px 0;
  width: inherit;
`;
const LogoTitle = styled.p`
  text-align: center;
  margin: 4px;
`;

const LeftNav = ({ accountType }) => (
  <Container accountType={accountType}>
    <LogoContainer>
      <HomeLogo />
      <LogoTitle>Home</LogoTitle>
    </LogoContainer>
    <LogoContainer>
      <AddCircleOutlineLogo />
      <LogoTitle>Add Grievances</LogoTitle>
    </LogoContainer>
    <LogoContainer>
      <TimelineLogo />
      <LogoTitle>Timeline</LogoTitle>
    </LogoContainer>
    <LogoContainer>
      <HelpOutlineLogo />
      <LogoTitle>Contact Us</LogoTitle>
    </LogoContainer>
  </Container>
);

LeftNav.propTypes = {
  accountType: PropTypes.oneOf(["USER", "MANAGER", "ADMIN"]),
};

LeftNav.defaultProps = { accountType: "USER" };

export default LeftNav;
