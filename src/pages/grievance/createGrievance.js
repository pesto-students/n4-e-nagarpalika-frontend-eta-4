/** @format */

import React, { useState } from "react";

import FileUpload from "./fileUpload";

import {
  Container,
  GrievanceForm,
  P,
  TextInput,
  TextInputData,
  Divhead,
  SelectType,
  Select,
  GrievanceInputData,
  Button,
} from "./styles";

function Grievance() {
  // eslint-disable-next-line no-unused-vars
  const [latLong, setLatLong] = useState([]);

  const getLocation = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      setLatLong([position.coords.latitude, position.coords.longitude]);
    });
    // console.log(latLong);
  };

  return (
    <Container>
      <GrievanceForm>
        <P>
          <b>Create a Grievance</b>
        </P>
        <TextInput placeholder="Title" />
        <Divhead>
          <SelectType>
            <option value="">Select Issue Type</option>
            <option value="HSR">Doctor</option>
            <option value="Engineer">Engineer</option>
            <option value="Farmer">Farmer</option>
            <option value="OTH">Other</option>
          </SelectType>
        </Divhead>
        <Divhead>
          <Select>
            <option value="">Select Location</option>
            <option value="HSR">Doctor</option>
            <option value="Engineer">Engineer</option>
            <option value="Farmer">Farmer</option>
            <option value="OTH">Other</option>
          </Select>
          <GrievanceInputData
            type="submit"
            value="Get location"
            onClick={getLocation}
          />
        </Divhead>
        <TextInputData placeholder="Please write a comprehensive report..." />
        <FileUpload />
        <Button>Submit</Button>
      </GrievanceForm>
    </Container>
  );
}

export default Grievance;
