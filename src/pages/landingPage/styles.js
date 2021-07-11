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
  width: 350px;
  height: 60px;
  border-radius: 100px;
  border: 2px solid #2c99ed;
  background-color: #fff;
  padding: 6px;
  font-size: 18px;
  color: #2c99ed;

  &:hover {
    background-color: #2c99ed;
    color: #ffffff;
    box-shadow: 0 0 10px rgb(0 0 0 / 80%);
  }
`;

export const ChartBoxesContainer = styled.div`
  display: flex;
  padding: 1% 1%;
`;
