/** @format */
import styled from "styled-components";

export const Input = styled.input`
  display: none;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  border: 2px solid black;
  background-color: #f12d2d;
  border-radius: 50%;
  left: 60%;
  bottom: 50%;
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  right: 50%;
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
  height: 30px;
  width: 30px;
  background: #000;
  text-align: center;
  border-radius: 50%;
  top: 10px;
  color: #fff;
  line-height: 30px;
  z-index: 9999;
`;

export const StatusOne = styled(ProgressStatus)`
  left: 10%;
  background: #0c84d9;
`;

export const StatusTwo = styled(ProgressStatus)`
  left: 30%;
  background: #0c84d9;
`;

export const StatusThree = styled(ProgressStatus)`
  left: 50%;
  background: #bbb;
  color: #ffd800;
`;

export const StatusFour = styled(ProgressStatus)`
  left: 60%;
  background: #bbb;
  color: #ffd800;
`;

export const Progress = styled.div`
  height: 10px;
  width: 30%;
  top: 20px;
  left: 10%;
  background: #bbb;
`;

export const ProgressOne = styled(Progress)`
  background: #0c84d9;
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
  width: 170px;
  padding: 10px;
  margin: 0;
  left: -8px;
  top: 0;
  color: #000;
`;

export const MessageOne = styled(Message)`
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
  left: 15%;
  color: #000;
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
  border: 1px solid grey;
  background-color: #2a2a76;
  color: white;
  align-self: center;
`;
export const ButtonPost = styled.button`
  padding: 10px;
  margin: 10px;
  width: 30%;
  max-width: 150px;
  border-radius: 8px;
  border: 1px solid grey;
  background-color: #2a2a76;
  color: white;
  align-self: flex-end;
`;

export const DivHead = styled.div`
  width: 60%;
  min-height: 350px;
`;

export const GrievanceBody = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  flex-direction: row;
  border-radius: 10px;
  background-color: rgba(149, 182, 134, 0.32);
  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;

export const GrievanceImage = styled.div`
  display: flex;
  width: 50%;
  padding: 10px;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
`;
export const GrievanceTextInput = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid grey;
  width: 85%;
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 115px);
`;

export const GrievanceForm = styled.form`
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

export const TextInput = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid grey;
  width: 85%;
`;
export const TextInputData = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid grey;
  width: 85%;
  height: 100px;
`;

export const P = styled.p`
  font-family: "Roboto", sans-serif;
`;
export const Divhead = styled.div`
  width: 85%;
  height: 25px;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
`;

export const Button = styled.button`
  padding: 6px 10px;
  margin: 4px;
  margin-right: 6%;
  border-radius: 4px;
  border: 1px solid grey;
  align-self: flex-end;
`;
export const GrievanceInputData = styled.input`
  width: 50%;
  color: gray;
  background-color: transparent;
  border-color: transparent;
  cursor: default;
`;
export const Select = styled.select`
  color: black;
  border-radius: 8px;
  border: transparent;
  width: 50%;
  height: 100%;
`;
export const SelectType = styled.select`
  border-radius: 8px;
  border: transparent;
  width: 100%;
  height: 100%;
`;
