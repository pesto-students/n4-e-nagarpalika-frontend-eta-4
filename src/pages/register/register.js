/** @format */

import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import useAuth from "../../modules/auth/authContext";

import {
  Container,
  Button,
  Checkbox,
  Form,
  FormInput,
  DivBody,
  DivHead,
  DivBodyColumn,
  P,
  SVG,
  Select,
  Terms,
} from "./styles";

function Register() {
  const { firebaseUser, login } = useAuth();
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [aadhar, setAadhar] = useState();
  const [phoneNo, setPhoneNumber] = useState();
  const history = useHistory();
  const [userCity, setCity] = useState();
  const [userGender, setGender] = useState();
  const [userProfession, setProfession] = useState();
  const [message, setMessage] = useState();
  const [textColor, setTextColor] = useState("#a51212");
  const registerUser = async () => {
    // const token = await firebaseUser.getIdToken();
    try {
      const token = await firebaseUser.getIdToken();
      const res = await axios.post(
        "/api/auth/register",
        {
          name: userName,
          phone_no: `+91${phoneNo}`,
          gender: userGender,
          profession: userProfession,
          city: userCity,
          email: userEmail,
          aadhar_no: aadhar,
          image_url: "",
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      if (res.status === 201) {
        login(res);
        history.push("/dashboard");
      }
    } catch (err) {
      setMessage(err.message);
    }
  };

  const selectCity = (e) => {
    setCity(e.target.value);
    // setMessage(city);
    setTextColor("#2a2a76");
    // console.log(city);
  };
  const selectGender = (e) => {
    setGender(e.target.value);
    // setMessage(gender);
    setTextColor("#2a2a76");
    // console.log(gender);
  };
  const selectProfession = (e) => {
    setProfession(e.target.value);
    // setMessage(city);
    setTextColor("#a51212");
    // console.log(profession);
  };
  const onChangeUserName = (e) => {
    setUserName(e.current.value);
  };
  const onChangePhoneNumber = (e) => {
    setPhoneNumber(e.current.value);
  };
  const onChangeEmail = (e) => {
    const identifier = e.current.value.includes("@");
    if (identifier) {
      if (e.current.value.split("@")[1].includes(".")) {
        setUserEmail(e.current.value);
        setMessage(" ");
      } else {
        setMessage("Please Add a valid Email Id");
      }
    } else {
      setMessage("Please Add a valid Email Id");
    }
    console.log(message);
  };
  const onChangeAadhar = (e) => {
    if (e.current.value.length !== 16) {
      setMessage("Please Add a valid Aadhar Card Number");
    } else {
      setAadhar(e.current.value);
      setMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  return (
    <Container>
      <Form>
        <DivHead>
          <DivBodyColumn>
            <P>Name*</P>
            <FormInput
              id="phone"
              type="text"
              onchange={onChangeUserName}
              placeholder="Enter your name"
              pattern="[0-9]{10}"
              // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </DivBodyColumn>
          <DivBodyColumn>
            <P>Mobile Number*</P>
            <FormInput
              id="phone"
              type="text"
              onChange={onChangePhoneNumber}
              // value={firebaseUser.phone_number}
              placeholder="Enter the 10 digit Mobile Number"
              pattern="[0-9]{10}"
              // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </DivBodyColumn>
          <DivBodyColumn>
            <P>City*</P>
            <Select onChange={selectCity}>
              <option value="BLR">Bengaluru</option>
              <option value="DEL">Delhi</option>
              <option value="HYD">Hyderabad</option>
              <option value="OTH">Other</option>
            </Select>
          </DivBodyColumn>
          <DivBodyColumn>
            <DivBody>
              <DivHead>
                <P>Profession</P>
                <Select onChange={selectProfession}>
                  <option value="Doctor">Doctor</option>
                  <option value="Engineer">Engineer</option>
                  <option value="Farmer">Farmer</option>
                  <option value="OTH">Other</option>
                </Select>
              </DivHead>
              <DivHead>
                <P>Gender</P>
                <Select onChange={selectGender}>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="OTH">Other</option>
                </Select>
              </DivHead>
            </DivBody>
          </DivBodyColumn>
        </DivHead>
        <DivHead>
          <DivBodyColumn>
            <P>Email*</P>
            <FormInput
              id="phone"
              type="text"
              onChange={onChangeEmail}
              placeholder="Enter your email ID"
              pattern="[0-9]{10}"
              // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </DivBodyColumn>
          <DivBodyColumn>
            <P>Aadhar Number*</P>
            <FormInput
              id="phone"
              type="tel"
              onChange={onChangeAadhar}
              placeholder="Enter the 16 digit Aadhar Number"
              pattern="[0-9]{16}"
              // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </DivBodyColumn>
          <DivBodyColumn>
            <DivBody>
              <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M9 16h6v-6h4l-7-7-7 7h4v6zm3-10.17L14.17 8H13v6h-2V8H9.83L12 5.83zM5 18h14v2H5z" />
              </SVG>
              <P>Upload Profile Picture</P>
            </DivBody>
            <DivBody>
              <Checkbox
                id="phone"
                type="checkbox"
                onClick={() => {
                  setLoading(!loading);
                }}
              />
              <Terms>
                {/* eslint-disable-next-line */}
                By Clicking here I accept the <a href="">Privacy Policy</a> and <a href="">Terms & Conditions</a> of use.
              </Terms>
            </DivBody>
          </DivBodyColumn>
          <DivBodyColumn>
            <Button disabled={loading} onClick={handleSubmit}>
              Register
            </Button>
          </DivBodyColumn>
        </DivHead>
      </Form>
      <P style={{ color: textColor }}>{message}</P>
    </Container>
  );
}

export default Register;
