/** @format */

import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 115px);
`;

export const Form = styled.form`
  padding: 20px;
  border: 1px solid grey;
  width: 40%;
  max-width: 600px;
  min-height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  box-shadow: 0 0 10px rgb(0 0 0 / 80%);
  box-sizing: border-box;
`;
export const DivHead = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  //margin: 10px;
  flex-direction: column;
  justify-content: center;
`;
export const DivBody = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
`;
export const DivBodyColumn = styled.div`
  width: 90%;
  height: 25%;
  margin-left: 6%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const FormInput = styled.input`
  margin: 5px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid grey;
  width: 95%;
`;
export const Checkbox = styled.input`
  margin: 5px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid grey;
  height: 35px;
  width: 35px;
  justify-content: flex-start;
`;
export const P = styled.p`
  margin-left: 10px;
  font-size: medium;
`;
export const Terms = styled.p`
  margin: 10px;
  margin-bottom: 16%;
  font-size: small;
`;

export const SVG = styled.svg`
  height: 24px;
  width: 24px;
  fill: #000000;
  align-self: center;
`;
export const Select = styled.select`
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
  border: 1px solid grey;
  width: 95%;
`;
export const Button = styled.button`
  padding: 10px;
  margin: 5px;
  width: 95%;
  border-radius: 8px;
  border: 1px solid grey;
  background-color: #2a2a76;
  color: white;
  align-self: center;
`;
