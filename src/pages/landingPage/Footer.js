/** @format */

import React from "react";

import { Footer, FooterText } from "./styles";

const FooterComponent = () => {
  return (
    <div className="card-footer bg-secondary">
      <Footer id="media">
        <FooterText>
          Pesto Ninja-4 ETA &copy; {new Date().getFullYear()} e-NagarPalika. All
          Rights Reserved.
        </FooterText>
      </Footer>
    </div>
  );
};

export default FooterComponent;
