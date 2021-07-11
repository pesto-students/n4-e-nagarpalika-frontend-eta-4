/** @format */

import React from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import {
  HeroSection,
  LiveTrackerSection,
  Title,
  SubTitle,
  ActionButtonContainer,
  ActionButtonTitle,
  ActionButton,
  ChartBoxesContainer,
} from "./styles";

import LineChart from "../../common/components/Charts/LineChart";

const LandingPage = () => {
  const { innerWidth } = window;
  const history = useHistory();

  const width = (innerWidth * 0.95) / 3;

  return (
    <>
      <HeroSection>
        <Title>Your one stop solution to grievance management</Title>
        <SubTitle>
          File your grievances and get a hasslefree resolution.
        </SubTitle>
        <ActionButtonContainer>
          <ActionButtonTitle>To file yor grievances:</ActionButtonTitle>
          <ActionButton
            onClick={() => {
              history.push("/login");
            }}
            type="button"
            data-cy="login-button"
          >
            Login/Sign up with Phone Number
          </ActionButton>
        </ActionButtonContainer>
      </HeroSection>
      <LiveTrackerSection>
        <Title>Live Tracker</Title>
        <SubTitle>Find an optimized tracker for all issues of past :</SubTitle>
        <ChartBoxesContainer>
          <LineChart {...{ width }} />
          <LineChart {...{ width }} />
          <LineChart {...{ width }} />
        </ChartBoxesContainer>
      </LiveTrackerSection>
    </>
  );
};

export default LandingPage;
