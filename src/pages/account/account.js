/** @format */

import React from "react";

import { Container, Card } from "./styles";

const Account = () => (
  <Container className="container d-flex flex-column justify-content-center align-items-center">
    <Card className="card shadow">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <form>
          <div className="form-row row">
            <div className="form-group col-md-6">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-row row">
            <div className="form-group col-md-6">
              <label htmlFor="inputMobileNumber">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                id="inputMobileNumber"
                placeholder="Mobile Number"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputAadharNumber">Aadhar Number</label>
              <input
                type="text"
                className="form-control"
                id="inputAadharNumber"
                placeholder="Aadhar Number"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="inputAddress2">Address 2</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="inputNagarPalika">Nagar Palika</label>
              <select
                id="inputNagarPalika"
                className="form-control"
                defaultValue=""
              >
                <option>Choose...</option>
                <option value="bangaluru">Bangaluru</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
              </select>
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="inputProfession">Profession</label>
              <select
                id="inputProfession"
                className="form-control"
                defaultValue=""
              >
                <option>Choose...</option>
                <option value="it-professional">IT Professional</option>
                <option value="government-servent">Government Servent</option>
                <option value="self-employed-businessman">
                  Self Employed / Businessman
                </option>
              </select>
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="inputGender">Gender</label>
              <select id="inputGender" className="form-control" defaultValue="">
                <option>Choose...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
          {/* <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div> */}
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </Card>
  </Container>
);

export default Account;
