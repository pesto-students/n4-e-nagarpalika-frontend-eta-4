/** @format */

import styled from "styled-components";

export const ToggleHead = styled.div`
  width: 400px;
  min-width: 200px;
  height: 35px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  /* justify-content: center; */
  /* align-items: center; */
`;
export const Admin = styled.div`
  width: 200px;
  height: 35px;
  justify-content: center;
  text-align: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 1px solid gray;
  /* background: #1d0c79; */
  /* color: white; */
  padding: 5px;
  box-shadow: 0 0 5px rgb(0 0 0 / 80%);
  box-sizing: border-box;
`;
export const CreateIssue = styled.div`
  width: 200px;
  height: 35px;
  justify-content: center;
  text-align: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid gray;
  padding: 5px;
  box-shadow: 0 0 5px rgb(0 0 0 / 80%);
  box-sizing: border-box;
`;
export const Container = styled.section`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  height: calc(100vh - 115px);
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
export const FormFields = styled.input`
  margin: 10px;
  margin-left: 15%;
  margin-bottom: 10%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid grey;
  width: 65%;
`;
export const Button = styled.button`
  padding: 6px 10px;
  margin: 4px;
  width: 80px;
  background: #1d0c79;
  margin-right: 6%;
  color: white;
  border-radius: 20px;
  border: 1px solid grey;
  align-self: center;
`;

export const P = styled.p`
  width: 90%;
  text-align: center;
`;
export const PTag = styled.p`
  width: 30%;
  /* margin-right: 12%; */
`;
export const Div = styled.div`
  width: 90%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Radio = styled.label`
  align-self: center;
  margin: 10px;
  margin-bottom: 7%;
  margin-left: 7%;
`;
export const SelectTag = styled.select`
  margin: 10px;
  margin-left: 15%;
  margin-bottom: 10%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid grey;
  width: 65%;
`;
export const RadioButton = styled.input`
  margin: 5px;
`;
export const Select = styled.select`
  margin: 10px;
  margin-left: 15%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid grey;
  width: 65%;
`;
