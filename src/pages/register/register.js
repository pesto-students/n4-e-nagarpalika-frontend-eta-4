/** @format */

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import RegisterSVG from "../../common/components/svg/registerSVG";
import { register } from "../../modules/account/actionCreators";
import { GENDER, LOCATIONS, PROFESSIONS } from "../../common/contants";

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
  Terms, Div,
} from "./styles";

function Register({ actionRegister }) {
  const history = useHistory();
  const account = useSelector((state) => state.account);

  useEffect(() => {
    const { fetchtatus, isLoggedIn, isFirstTime } = account;

    if (fetchtatus === "SUCCESS" && isLoggedIn && !isFirstTime) {
      history.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  // const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [phoneNumber] = useState(account.phoneNumber);
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [profession, setProfession] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");
  const [textColor, setTextColor] = useState("#a51212");
  const [checkbox, setCheckbox] = useState(false);

  const selectCity = (e) => {
    setCity(e.target.value);
    setTextColor("#2a2a76");
  };
  const selectGender = (e) => {
    setGender(e.target.value);
    setTextColor("#2a2a76");
  };
  const selectProfession = (e) => {
    setProfession(e.target.value);
    setTextColor("#a51212");
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeAadhar = (e) => {
    setAadhar(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await actionRegister({
      name,
      email,
      aadhar,
      phoneNumber,
      city,
      gender,
      profession,
      // avatar,
    });

    setLoading(false);
  };

  return (
    <Container className="card border-0">
      <Form onSubmit={onSubmit}>
        <Div>
          <RegisterSVG/>
        </Div>
        <Div className="row">
          <DivBodyColumn className="col">
            <P>Name*</P>
            <FormInput
              id="name"
              type="text"
              onChange={onChangeName}
              value={name}
              placeholder="Enter your name"
            />
          </DivBodyColumn>
          <DivBodyColumn className="col">
            <P>Email*</P>
            <FormInput
                id="email"
                type="email"
                onChange={onChangeEmail}
                value={email}
                placeholder="Enter your Email"
            />
          </DivBodyColumn>
        </Div>
        <Div className="row">
          <DivBodyColumn className="col">
            <P>Mobile Number*</P>
            <FormInput
              id="phoneNumber"
              type="text"
              value={phoneNumber}
              placeholder="Enter the 10 digit Mobile Number"
              pattern="[0-9]{10}"
              disabled
            />
          </DivBodyColumn>
          <DivBodyColumn className="col">
            <P>Aadhar Number*</P>
            <FormInput
                id="aadharNumber"
                type="number"
                onChange={onChangeAadhar}
                value={aadhar}
                placeholder="Enter the 16 digit Aadhar Number"
                pattern="[0-9]{16}"
            />
          </DivBodyColumn>
        </Div>
        <Div className="row">
          <DivBodyColumn className="col">
            <P>City*</P>
            <Select onChange={selectCity} value={city}>
              <option value="">Select</option>
              <option value={LOCATIONS.bangaluru}>Bengaluru</option>
              <option value={LOCATIONS.delhi}>Delhi</option>
              <option value={LOCATIONS.mumbai}>Mumbai</option>
            </Select>
          </DivBodyColumn>
          <DivBodyColumn className="col">
            <DivBody>
              <DivHead>
                <P>Profession</P>
                <Select onChange={selectProfession} value={profession}>
                  <option value="">Select</option>
                  <option value={PROFESSIONS.doctor}>Doctor</option>
                  <option value={PROFESSIONS.engineer}>Engineer</option>
                  <option value={PROFESSIONS.farmer}>Farmer</option>
                  <option value={PROFESSIONS.other}>Other</option>
                </Select>
              </DivHead>
              <DivHead>
                <P>Gender</P>
                <Select onChange={selectGender} value={gender}>
                  <option value="">Select</option>
                  <option value={GENDER.male}>Male</option>
                  <option value={GENDER.female}>Female</option>
                  <option value={GENDER.other}>Other</option>
                </Select>
              </DivHead>
            </DivBody>
          </DivBodyColumn>

        </Div>
        <Div className="row">
          <DivBodyColumn  className="col">
            <a href="#" style={{marginTop:"10px"}}>
              <DivBody>
                <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M9 16h6v-6h4l-7-7-7 7h4v6zm3-10.17L14.17 8H13v6h-2V8H9.83L12 5.83zM5 18h14v2H5z" />
                </SVG>
                <P>Upload Profile Picture</P>
              </DivBody>
            </a>
          </DivBodyColumn>
          <DivBodyColumn className="col">

          <DivBody>
            <Checkbox
                type="checkbox"
                value={checkbox}
                disabled={loading}
                onClick={() => {
                  setCheckbox(!checkbox);
                }}
            />
            <Terms>
              By Clicking here I accept the Privacy Policy and Terms
              Conditions of use.
            </Terms>
          </DivBody>
          </DivBodyColumn>
        </Div>
        <DivHead>
          <DivBodyColumn>
            <Button className="btn btn-primary" disabled={loading} onClick={onSubmit}>
              Register
            </Button>
          </DivBodyColumn>
          <DivBodyColumn>
            <P style={{ color: textColor }}>{message}</P>
          </DivBodyColumn>
        </DivHead>
      </Form>
    </Container>
  );
}

const mapDispatchToProps = {
  actionRegister: register,
};

export default connect(null, mapDispatchToProps)(Register);
