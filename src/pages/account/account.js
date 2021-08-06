/** @format */

/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { connect, useSelector } from "react-redux";

import { Alert } from "../../common/components/Alerts/Alerts";

import { Heading } from "../../common/components/Typography/Typography";
import Button from "../../common/components/Buttons/Button";
import Card from "../../common/components/Cards/Card";
import CardBody from "../../common/components/Cards/CardBody";
// import CardTitle from "../../common/components/Cards/CardTitle";
import Col from "../../common/components/Layout/Col";
import Container from "../../common/components/Layout/Container";
import EmailInput from "../../common/components/Form/EmailInput";
import NameInput from "../../common/components/Form/NameInput";
import PhoneNumberInput from "../../common/components/Form/PhoneNumberInput";
import AadharInput from "../../common/components/Form/AadharInput";
import Select from "../../common/components/Form/Select";
import Option from "../../common/components/Form/Option";
import Row from "../../common/components/Layout/Row";

// import { Container, Card, FormRow } from "./styles";
import { GENDER, LOCATIONS, PROFESSIONS } from "../../common/contants";
import { update } from "../../modules/account/actionCreators";

const Account = ({ actionUpdate }) => {
  const reduxState = useSelector((state) => state);
  const { account } = reduxState;
  const {
    location: userLocation,
    name: userName,
    phoneNumber: userPhoneNumber,
    email: userEmail,
    aadharNumber: userAadharNumber,
    profession: userProfession,
    gender: userGender,
  } = account;

  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [phoneNumber, setPhoneNumber] = useState(userPhoneNumber);
  const [aadharNumber, setAadharNumber] = useState(userAadharNumber);
  // const [address, setAddress] = useState("");
  const [nagarPalika, setNagarPalika] = useState(userLocation);
  const [profession, setProfession] = useState(userProfession);
  const [gender, setGender] = useState(userGender);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  const onSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();

    setTimeout(() => {
      setIsUpdated(true);
      setIsLoading(false);

      setTimeout(() => {
        setIsUpdated(false);
      }, 2000);
    }, 2000);
  };

  return (
    <Container
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh)",
      }}
    >
      <Card
        shadow
        className=""
        style={{
          width: "60%",
          // height: "50%",
        }}
      >
        <CardBody className="">
          <Heading size={4} className="text-center p-2">
            Profile Update
          </Heading>

          <form onSubmit={onSubmit}>
            <Row className="form-row">
              <Col md={6} className="form-group">
                <NameInput
                  initialValue={userName}
                  setName={(n) => setName(n)}
                  disabled={isLoading}
                />
              </Col>
              <Col md={6} className="form-group ">
                <EmailInput
                  initialValue={userEmail}
                  setEmail={(e) => setEmail(e)}
                  disabled={isLoading}
                />
              </Col>
            </Row>
            <Row className="form-row row">
              <Col md={6} className="form-group">
                <PhoneNumberInput
                  initialValue={userPhoneNumber}
                  setNumber={(num) => setPhoneNumber(num)}
                  disabled
                />
              </Col>
              <Col md={6} className="form-group">
                <AadharInput
                  initialValue={userAadharNumber}
                  setNumber={(num) => setAadharNumber(num)}
                  disabled
                />
              </Col>
            </Row>

            <Row className="form-row">
              <Col md={6} className="form-group">
                <Select
                  id="inputNagarPalika"
                  className="form-control my-2 py-3"
                  value={nagarPalika}
                  onChange={(e) => setNagarPalika(e.target.value)}
                  data-cy="inputNagarPalika"
                >
                  <Option value="">Select Location</Option>
                  <Option value={LOCATIONS.bangaluru}>Bangalore</Option>
                  <Option value={LOCATIONS.delhi}>Delhi</Option>
                  <Option value={LOCATIONS.mumbai}>Mumbai</Option>
                </Select>
              </Col>
              <Col md={6} className="form-group">
                <Select
                  id="inputProfession"
                  className="form-control my-2 py-3"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  data-cy="inputProfession"
                >
                  <Option value="">Select Profession</Option>
                  <Option value={PROFESSIONS.engineer}>Engineer</Option>
                  <Option value={PROFESSIONS.doctor}>Doctor</Option>
                  <Option value={PROFESSIONS.farmer}>Farmer</Option>
                  <Option value={PROFESSIONS.other}>Other</Option>
                </Select>
              </Col>
            </Row>

            <Row className="form-row">
              <Col md={6} className="form-group">
                <Select
                  id="inputGender"
                  className="form-control my-2 py-3"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  data-cy="inputGender"
                >
                  <Option value="">Select Gender</Option>
                  <Option value={GENDER.male}>Male</Option>
                  <Option value={GENDER.female}>Female</Option>
                  <Option value={GENDER.other}>Other</Option>
                </Select>
              </Col>
              <Col
                md={6}
                className="form-group"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Button
                  className=""
                  buttonType="submit"
                  type="primary"
                  disabled={isLoading}
                  data-cy="submit"
                >
                  {isLoading && (
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  )}
                  {isLoading ? "Loading..." : "Update"}
                </Button>
              </Col>
            </Row>

            {/* <div className="d-flex justify-content-end">
              <Button
                className=""
                buttonType="submit"
                type="primary"
                disabled={isLoading}
                data-cy="submit"
              >
                {isLoading && (
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
                {isLoading ? "Loading..." : "Update"}
              </Button>
            </div> */}
            {isUpdated && <Alert content="Updated" type="success" />}
          </form>
        </CardBody>
      </Card>
    </Container>
  );
};

const mapDispatchToProps = {
  actionUpdate: update,
};

export default connect(null, mapDispatchToProps)(Account);
