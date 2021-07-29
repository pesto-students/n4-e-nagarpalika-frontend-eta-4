/** @format */

import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 115px);
`;
export const InnerContainer = styled.div`
 width: 80%;
  align-self: center;
`;
export const Form = styled.form`
  padding: 20px;
  border: 1px solid grey;
  width: 400px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  box-shadow: 0 0 10px rgb(0 0 0 / 80%);
  box-sizing: border-box;
`;

export const PhoneNumberInput = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid grey;
  width: 85%;
`;

export const Button = styled.button`
  padding: 6px 10px;
  margin: 4px;
  margin-right: 6%;
  border-radius: 4px;
  border: 1px solid grey;
  align-self: flex-end;
`;
