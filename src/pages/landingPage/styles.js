/** @format */

import styled from "styled-components";

import BackgroundSVG from "../../assets/svg/Artwork.svg";

export const HeroSection = styled.section`
  height: calc(100vh - 60px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${BackgroundSVG});
  background-size: contain;
`;

export const LiveTrackerSection = styled.section`
  height: 85vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 5% 0;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 5em;
  margin: 0 10% 0 10%;
  text-align: center;
`;

export const SubTitle = styled.p`
  color: #9b9b9b;
  margin: 0 0 2% 0;
  padding: 6px;
  font-size: 1.3rem;
  text-align: center;
`;

export const ActionButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const ActionButtonTitle = styled.p`
  color: #9b9b9b;
  font-size: 1.1rem;
`;

export const ActionButton = styled.button`
  margin-top: 20px;
  width: 150px;
  height: 50px;
  border-radius: 100px;
  border: 0;
  background-color: #fff;
  box-shadow: 0 0 10px rgb(0 0 0 / 80%);
  padding: 6px;
  font-size: 18px;
  color: #6c63ff;

  &:hover {
    background-color: #6c63ff;
    color: #ffffff;
    box-shadow: 0 0 10px rgb(0 0 0 / 80%);
  }
`;

export const ChartBoxesContainer = styled.div`
  display: flex;
  padding: 1% 1%;
`;

export const SVGIMAGE = styled.svg`
  width: 100%;
  height: 100%;
  padding: 5px;
  background: white;
`;

export const Header = styled.div`
  //background-color: #674baf;
`;

export const HeaderMin = styled.div`
  margin-top: 20px;
`;

export const H1 = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 5vw;
  margin-top: 20px;
  @media screen and (max-width: 700px) {
    text-align: center;  
    font-size: 1.875rem;
  }

  @media screen and (min-width: 1408px) {
      font-size: 2.625rem;
  }
`;

export const P = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 2vw;
  
  @media screen and (max-width: 500px) {
    font-size: 1.125rem;
  }

  @media screen and (min-width: 1408px) {
    font-size: 1.125rem;
    line-height: 1.5;
  }
`;
