/** @format */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import isEmail from "validator/es/lib/isEmail";

import RegisterSVG from "../../common/components/svg/registerSVG";
// import { validateAadhar as apiValidateAadhar } from "../../modules/account/api";
import { register } from "../../modules/account/actionCreators";
import { GENDER, LOCATIONS, PROFESSIONS } from "../../common/contants";

import { Heading } from "../../common/components/Typography/Typography";
import Button from "../../common/components/Buttons/Button";
import Card from "../../common/components/Cards/Card";
import Checkbox from "../../common/components/Form/Check";
import Col from "../../common/components/Layout/Col";
import Container from "../../common/components/Layout/Container";
import Form from "../../common/components/Form/Form";
import Input from "../../common/components/Form/Input";
import Option from "../../common/components/Form/Option";
import Row from "../../common/components/Layout/Row";
import Select from "../../common/components/Form/Select";
import AadharInput from "../../common/components/Form/AadharInput";
import NameInput from "../../common/components/Form/NameInput";
import EmailInput from "../../common/components/Form/EmailInput";
// import PhoneNumberInput from "../../common/components/Form/PhoneNumberInput";

function Register({ actionRegister }) {
  const history = useHistory();
  const account = useSelector((state) => state.account);

  useEffect(() => {
    const { fetchStatus, isLoggedIn, isFirstTime } = account;

    if (fetchStatus === "SUCCESS" && isLoggedIn && !isFirstTime) {
      history.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  // const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [phoneNumber] = useState(account.phoneNumber);
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [profession, setProfession] = useState("");
  // eslint-disable-next-line no-unused-vars
  // const [message, setMessage] = useState("");
  const [textColor, setTextColor] = useState("#a51212");
  const [checkbox, setCheckbox] = useState(false);
  // const [aadharNumberExist, setAadharNumberExist] = useState(false);
  // const [isFormValid, setIsFormValid] = useState(false);

  const onChangeLocation = (e) => {
    setLocation(e.target.value);
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
  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const onChangeEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const onChangeAadhar = async (e) => {
  //   const aadhar = e.target.value;
  //   setAadharNumber(aadhar);

  //   // display error message in UI
  //   if (aadhar.length === 16) {
  //     const { data } = await apiValidateAadhar({ aadharNumber: aadhar });
  //     // eslint-disable-next-line no-unused-vars
  //     const { exists } = data;

  //     setAadharNumberExist(exists);
  //     // console.log(exists);
  //   }
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await actionRegister({
      name,
      email,
      aadharNumber,
      phoneNumber,
      location,
      gender,
      profession,
      // avatar,
    });

    setLoading(false);
  };

  return (
    <Container
      center
      className={""}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh)",
      }}
    >
      <Card shadow className="p-4" style={{ width: "70%" }}>
        <Form onSubmit={onSubmit}>
          <Row style={{}}>
            <RegisterSVG height={300} />
          </Row>
          <Row>
            <Heading size={2} className="text-center my-2 py-2">
              Please fill your details below
            </Heading>
          </Row>
          <Row>
            <Col size={6}>
              <NameInput setName={(str) => setName(str)} disabled={loading} />
            </Col>
            <Col size={6}>
              <EmailInput setEmail={(em) => setEmail(em)} disabled={loading} />
            </Col>
          </Row>
          <Row>
            <Col size={6}>
              <Input
                id="phoneNumber"
                type="text"
                onChange={() => {}}
                value={phoneNumber}
                placeholder="Enter the 10 digit Mobile Number"
                disabled
                className="mb-3"
              />
            </Col>
            <Col size={6}>
              <AadharInput
                setNumber={(num) => setAadharNumber(num)}
                disabled={loading}
              />
            </Col>
          </Row>
          <Row>
            <Col size={6}>
              <Select
                onChange={onChangeLocation}
                value={location}
                className="my-2 py-3"
              >
                <Option value="">Select Location</Option>
                <Option value={LOCATIONS.bangaluru}>Bengaluru</Option>
                <Option value={LOCATIONS.delhi}>Delhi</Option>
                <Option value={LOCATIONS.mumbai}>Mumbai</Option>
              </Select>
            </Col>
            <Col size={6}>
              <Select
                onChange={selectProfession}
                value={profession}
                className="my-2 py-3"
              >
                <Option value="">Select Profession</Option>
                <Option value={PROFESSIONS.doctor}>Doctor</Option>
                <Option value={PROFESSIONS.engineer}>Engineer</Option>
                <Option value={PROFESSIONS.farmer}>Farmer</Option>
                <Option value={PROFESSIONS.other}>Other</Option>
              </Select>
            </Col>
          </Row>
          <Row>
            <Col size={6}>
              <Select
                onChange={selectGender}
                value={gender}
                className="my-2 py-3"
              >
                <Option value="">Gender</Option>
                <Option value={GENDER.male}>Male</Option>
                <Option value={GENDER.female}>Female</Option>
                <Option value={GENDER.other}>Other</Option>
              </Select>
            </Col>
          </Row>
          <Row>
            <Col size={12}>
              <Checkbox
                id="checkbox"
                type="checkbox"
                label={
                  "By Clicking here I accept the Privacy Policy and Terms Conditions of use."
                }
                value={checkbox}
                disabled={loading}
                onChange={() => {
                  setCheckbox(!checkbox);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col size={12} className="d-flex justify-content-end">
              <Button
                type="primary"
                className=""
                disabled={
                  !checkbox ||
                  !isEmail(email) ||
                  aadharNumber.length !== 16 ||
                  gender.length <= 0 ||
                  loading ||
                  location.length <= 0 ||
                  profession.length <= 0 ||
                  name.length <= 0
                }
                onClick={onSubmit}
              >
                Register
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

const mapDispatchToProps = {
  actionRegister: register,
};

export default connect(null, mapDispatchToProps)(Register);
