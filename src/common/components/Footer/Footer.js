/** @format */

import React from "react";

import { FacebookLogo, TwitterLogo, YoutubeLogo } from "../logos/Logos";

import {
  Container,
  CopyrightText,
  ButtonContainer,
  Button,
  LogosContainer,
  LogoContainer,
} from "./styles";

const Footer = () => (
  <Container>
    <CopyrightText>© 2021 e-NagarPalika. All Rights Reserved</CopyrightText>

    <ButtonContainer>
      <Button>Contact</Button>
      <Button>Help</Button>
      <Button>Term of Use</Button>
      <Button>Privacy Policy</Button>
    </ButtonContainer>

    <LogosContainer>
      <LogoContainer>
        <FacebookLogo />
      </LogoContainer>
      <LogoContainer>
        <TwitterLogo />
      </LogoContainer>
      <LogoContainer>
        <YoutubeLogo />
      </LogoContainer>
    </LogosContainer>
  </Container>
);

export default Footer;
