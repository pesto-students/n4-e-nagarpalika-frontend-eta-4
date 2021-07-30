/** @format */
import styled from "styled-components";

export const Input = styled.input`
  display: none;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: row;
  float: right;
`;
export const Label = styled.label`
  display: flex;
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
  border: 1px dashed black;
  margin: 10px;
  background: rgba(128, 128, 128, 0.39);
`;
export const A = styled.a`
  font-size: small;
`;
export const CloseButton = styled.button`
  position: relative;
  border: 1px solid black;
  background-color: #f12d2d;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  left: 60%;
  bottom: 50%;
`;

export const Img = styled.img`
  width: 100%;
  height: 95%;
`;

export const Div = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  border: 1px dashed black;
  margin: 10px;
  align-items: center;
`;
export const Slider = styled.section`
  height: 75%;
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 80%;
  max-width: 300px;
  height: 60%;
  min-height: 160px;
  max-height: 200px;
  align-self: center;
  border-radius: 10px;
`;

export const DivImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  min-height: 200px;
  max-height: 300px;
  opacity: 1;
  transition-duration: 1s;
  transform: ${(props) =>
    props.sliderStyle.slideActive ? "scale(1.08)" : null};
`;

export const DivHeadBar = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 50px;
`;
export const DivBodyBar = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ProgressStatus = styled.div`
  height: 20px;
  width: 20px;
  background: #bbb;
  text-align: center;
  border-radius: 50%;
  top: 10px;
  color: #fff;
  line-height: 30px;
  z-index: 9999;
`;

export const StatusOne = styled(ProgressStatus)`
  left: 10%;
  background: #2ead16;
`;

export const StatusTwo = styled(ProgressStatus)`
  left: 30%;
  background: #2ead16;
`;

export const StatusThree = styled(ProgressStatus)`
  left: 50%;
`;

export const StatusFour = styled(ProgressStatus)`
  left: 60%;
`;

export const Progress = styled.div`
  height: 10px;
  width: 28%;
  top: 20px;
  left: 10%;
  background: #bbb;
`;

export const ProgressOne = styled(Progress)`
  background: #2ead16;
`;

export const ProgressTwo = styled(Progress)`
  left: 37%;
`;

export const ProgressThree = styled(Progress)`
  left: 64%;
`;

export const Message = styled.div`
  position: relative;
  height: 60px;
  width: 35%;
  padding: 10px;
  margin: 0;
  font-size: small;
  left: -8px;
  top: 0;
  color: #000;
  @media (max-width: 1200px) and(min-width: 995px) {
    font-size: smaller;
  }
`;

export const MessageOne = styled(Message)`
  left: -5%;
  color: #000;
`;

export const MessageTwo = styled(Message)`
  right: 10%;
  color: #000;
`;

export const MessageThree = styled(Message)`
  left: 5%;
  color: #000;
`;

export const MessageFour = styled(Message)`
  left: 11%;
  color: #000;
  @media (max-width: 1200px) and (min-width: 995px) {
    left: 7%;
  }
`;

export const GrievanceContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 115px);
`;
export const PGrievance = styled.p`
  border: 1px solid crimson;
  background-color: #cda46e;
  padding: 10px;
  margin: 10px;
  text-align: center;
  align-self: center;
`;

export const Text = styled.p`
  padding: 5px;
`;

export const Header = styled.h1`
  padding: 5px;
`;

export const AGrievance = styled.a`
  padding: 5px;
`;

export const TakeActionButton = styled.button`
  padding: 10px;
  margin: 55px 10px 10px 10px;
  width: 30%;
  max-width: 150px;
  border-radius: 8px;
  align-self: center;
  @media (max-width: 1200px) {
    margin: 10px;
  }
`;
export const ButtonPost = styled.button`
  padding: 10px;
  margin: 20px;
  width: 30%;
  max-width: 150px;
  border-radius: 8px;
  align-self: flex-end;
`;

export const DivHead = styled.div`
  width: 60%;
  margin: 10px;
  min-height: 350px;
  min-width: 400px;
  @media (max-width: 1200px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const GrievanceBody = styled.div`
  display: flex;
  margin: 20px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 10px;
  background: #c9e8d8;
  @media (max-width: 1200px) {
    flex-direction: column;
    width: 90%;
    //text-align: center;
  }
`;

export const GrievanceImage = styled.div`
  display: flex;
  width: 50%;
  padding: 10px;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  @media (max-width: 1200px) {
    flex-direction: column;
    width: 90%;
    margin: 5px;
    padding: 5px;
  }
`;
export const GrievanceTextInput = styled.textarea`
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid grey;
  width: 85%;
  min-width: 465px;
  @media (max-width: 1200px) {
    width: 70%;
    min-width: 0;
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  //background: linear-gradient(to right, #b48830, #c14949);
  height: calc(100vh - 115px);
  @media (max-width: 1200px) {
    width: calc(81vw);
    height: calc(100vh - 5%);
    margin-left: 3%;
  }
`;
export const GrievanceInner = styled.div`
  padding: 20px;
  border: 1px solid grey;
  width: auto;
  min-height: 150px;
  display: flex;
  background-color: white;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //background: linear-gradient(to right, #dbc691, #a2ac45);
  border-radius: 18px;
  box-shadow: 0 0 10px rgb(0 0 0 / 80%);
  box-sizing: border-box;
  @media (max-width: 1200px) {
    flex-direction: column;
    width: 90%;
    margin: 10px;
  }
`;

export const SVGIMAGE = styled.svg`
  width: 100%;
  height: 50%;
`;

export const GrievanceForm = styled.form`
  padding: 20px;
  width: 400px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background: linear-gradient(to right, #dbc691, #a2ac45);
  box-sizing: border-box;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const TextInput = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid grey;
  width: 85%;
`;
export const TextInputData = styled.textarea`
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid grey;
  background: transparent;
  width: 85%;
  height: 100px;
`;
export const Error = styled.p`
  color: red;
  font-family: "Roboto", sans-serif;
`;

export const P = styled.p`
  color: #6c63ff;
  font-family: "Roboto", sans-serif;
`;
export const Divhead = styled.div`
  width: 85%;
  height: 60px;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  //background: linear-gradient(to right, #d8ffe9, #82fddf);
  border: 1px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
`;

export const Button = styled.button`
  padding: 6px 10px;
  margin: 4px;
  border-radius: 4px;
  min-width: 100px;
  //background-color: var(--theme-button-primary-background-color);
  box-shadow: inset 0 1px 0 0 rgb(255 255 255 / 40%);
  border: 1px solid grey;
  align-self: flex-end;
`;
export const GrievanceInputData = styled.a`
  width: 50%;
  height: 100%;
  margin: 2px;
  color: green;
  background-color: transparent;
  border-color: transparent;
  cursor: default;
  &:disabled {
    background: #bbbaba;
  }
  @media (max-width: 535px) {
    font-size: smaller;
  }
`;
export const Select = styled.select`
  color: black;
  margin: 2px;
  border-radius: 3px;
  border: transparent;
  background: transparent;
  width: 50%;
  height: 100%;

  &:disabled {
    background: #bbbaba;
  }
`;
export const SelectType = styled.select`
  border: transparent;
  background: transparent;
  width: 100%;
  height: 100%;
  &:disabled {
    background: #bbbaba;
  }
`;
