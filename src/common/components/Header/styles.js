/** @format */

import styled from "styled-components";

export const Nav = styled.nav`
  height: 75px;

  width: ${({ hiddenNavs }) => (hiddenNavs ? "calc(100% - 60px)" : "100%")};
  margin: ${({ hiddenNavs }) => (hiddenNavs ? "0 0 0 60px" : "0px")};
`;

export const Span = styled.span`
  text-align: center;
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;

export const FLex = styled.div`
  display: flex;
  flex-direction: row;
  float: right;
  @media (max-width: 990px) {
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    background-color: #ffff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 8px;
  }
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
