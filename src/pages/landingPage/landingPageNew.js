/** @format */

import React from "react";
import { Link } from "react-router-dom";

import LandingPageCover from "../../common/components/svg/LandingPageCover";
import { ENagarPalika } from "../../common/components/svg/Logos";
import FooterComponent from "./Footer";
import GraphSection from "./GraphSection";
import {
  Header,
  ActionButton,
  H1,
  P,
  HeaderMin,
  HeroSection,
  DivHead,
  A,
} from "./styles";

const LandingPageNew = () => {
  const onClickScroll = () => {
    window.scrollTo({
      behavior: "smooth",
      top: window.innerHeight,
    });
  };

  return (
    <DivHead className="container-fluid">
      <div className="row">
        <div className="col">
          <ENagarPalika />
        </div>
        <div className="col" />
        <div className="col">
          <ActionButton onClick={onClickScroll}>Issue Tracker</ActionButton>
        </div>
      </div>
      <HeroSection className="container-fluid">
        <Header className="container">
          <HeaderMin className="row">
            <div className="col-md-6">
              <LandingPageCover />
            </div>
            <div className="col-md-6">
              <H1>Your one stop solution to grievance management</H1>

              <P>
                e-NagarPalika re-imagines the way we file our grievances. You
                have a voice, and it needs to be heard. File your grievances and
                get a hasslefree resolution.
              </P>
              <Link to="/login">
                <ActionButton type="button">Join us</ActionButton>
              </Link>
            </div>
          </HeaderMin>
        </Header>
      </HeroSection>
      <GraphSection />
      <div style={{ margin: "1rem" }} />
      {/* <hr /> */}
      <FooterComponent />
    </DivHead>
  );
};

export default LandingPageNew;
