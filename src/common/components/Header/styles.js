/** @format */

import styled from "styled-components";

export const Nav = styled.nav`
  height: 75px;

  width: ${({ hiddenNavs }) => (hiddenNavs ? "calc(100% - 60px)" : "100%")};
  margin: ${({ hiddenNavs }) => (hiddenNavs ? "0 0 40px 60px" : "0px")};
`;

export const Span = styled.span`
  text-align: center;
  font-size: 8px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

export const NotifHeader = styled.p`
  color: #ffffff;
  font-size: larger;
  background: #38a583;
`;

export const NotifFooter = styled.a`
  color: #ffffff;
  font-size: larger;
  background: #0d6efd;
`;

export const NotifTime = styled.div`
  font-size: small;
  float: right;
`;
