/** @format */
import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 115px);
`;

export const Flex = styled.div`
  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
