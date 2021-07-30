/** @format */

import React, { useState } from "react";

import { Alert } from "../../common/components/Alerts/Alerts";

import { Container, Card, FormRow } from "./styles";
import {useSelector} from "react-redux";
import {GENDER, LOCATIONS, PROFESSIONS} from "../../common/contants";

const Account = () => {
  const reduxState = useSelector((state) => state);
  const { account } = reduxState;
  const {
    location: userLocation,
    name: userName,
    phoneNumber: userPhone,
    email: userEmail,
    aadharNumber:userAadharNumber,
    profession: userProfession,
    gender:userGender
  } = account;

  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [phoneNumber, setPhoneNumber] = useState(userPhone);
  const [aadharNumber, setAadharNumber] = useState(userAadharNumber);
  // const [address, setAddress] = useState("");
  const [nagarPalika, setNagarPalika] = useState(userLocation);
  const [profession, setProfession] = useState(userProfession);
  const [gender, setGender] = useState(userGender);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  // TODO: just add update function here from backend API
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
    <Container className="container d-flex flex-column justify-content-center align-items-center">
      <Card className="card shadow">
        <div className="card-body">
          <h5 className="card-title text-center p-2">Profile Update</h5>
          <form onSubmit={onSubmit}>
            <FormRow className="form-row row">
              <div className="form-group col-md-6">
                <label htmlFor="inputName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  data-cy="inputName"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  disabled
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-cy="inputEmail"
                />
              </div>
            </FormRow>
            <FormRow className="form-row row">
              <div className="form-group col-md-6">
                <label htmlFor="inputMobileNumber">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputMobileNumber"
                  placeholder="Mobile Number"
                  disabled
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  data-cy="inputMobileNumber"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputAadharNumber">Aadhar Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAadharNumber"
                  placeholder="Aadhar Number"
                  value={aadharNumber}
                  disabled
                  onChange={(e) => setAadharNumber(e.target.value)}
                  data-cy="inputAadharNumber"
                />
              </div>
            </FormRow>

            <FormRow className="form-row row">
              <div className="form-group col-md-6">
                <label htmlFor="inputNagarPalika">Nagar Palika</label>
                <select
                  id="inputNagarPalika"
                  className="form-control"
                  // defaultValue=""
                  value={nagarPalika}
                  onChange={(e) => setNagarPalika(e.target.value)}
                  data-cy="inputNagarPalika"
                >
                  <option value={LOCATIONS.bangaluru}>Bangalore</option>
                  <option value={LOCATIONS.delhi}>Delhi</option>
                  <option value={LOCATIONS.mumbai}>Mumbai</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputProfession">Profession</label>
                <select
                  id="inputProfession"
                  className="form-control"
                  // defaultValue=""
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  data-cy="inputProfession"
                >
                  <option value={PROFESSIONS.engineer}>Engineer</option>
                  <option value={PROFESSIONS.doctor}>Doctor</option>
                  <option value={PROFESSIONS.farmer}>Farmer</option>
                  <option value={PROFESSIONS.other}>
                    Other
                  </option>
                </select>
              </div>
            </FormRow>

            <FormRow className="form-row row">
              <div className="form-group col-md-6">
                <label htmlFor="inputGender">Gender</label>
                <select
                  id="inputGender"
                  className="form-control"
                  // defaultValue=""
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  data-cy="inputGender"
                >
                  <option value={GENDER.male}>Male</option>
                  <option value={GENDER.female}>Female</option>
                  <option value={GENDER.other}>Other</option>
                </select>
              </div>

              {/* 
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div> 
              */}
            </FormRow>
            {/* 
            <FormRow>
              <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  data-cy="inputAddress"
                />
              </div>
            </FormRow> 
            */}

            <FormRow className="d-flex justify-content-end">
              <button
                className="btn btn-primary"
                type="submit"
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
              </button>
            </FormRow>
            {isUpdated && <Alert content="Updated" type="success" />}
          </form>
        </div>
      </Card>
    </Container>
  );
};

export default Account;
