/** @format */

/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { connect, useSelector } from "react-redux";

import FileUpload from "./fileUpload";

import LoginSVG from "../../../common/components/svg/LoginSVG";

import {
  Error,
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
  GrievanceInner,
} from "./styles";
import { GRIEVANCE_CATEGORIES, LOCATIONS } from "../../../common/contants";

function CreateGrievance({ onSubmit }) {
  const reduxState = useSelector((state) => state);
  const { account, issues } = reduxState;
  const { city: userLocation } = account;

  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState(userLocation);
  const [coords, setCoords] = useState([0, 0]);
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");
  const [coordsSelected, setCoordsSelected] = useState(false);

  const getCoords = (e) => {
    e.preventDefault();
    window.navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setCoords([longitude, latitude]);
      setCoordsSelected(true);
    });
  };

  const selectCategory = (e) => {
    setCategory(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleUpload = (url) => {
    setImages([...images, url]);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const submitGrievance = async (e) => {
    e.preventDefault();
    if (title && category && description && location && images.length > 0) {
      setMessage("");

      await onSubmit({
        title,
        category,
        description,
        location,
        images,
        coords,
      });
    } else {
      setMessage("**Please fill all the fields correctly");
    }
  };

  return (
    <Container>
      <GrievanceInner>
        <GrievanceForm>
          <LoginSVG />
        </GrievanceForm>

        <GrievanceForm>
          <P className="text-primary">
            <b>Create a Grievance</b>
          </P>
          <TextInput
            value={title}
            onChange={onChangeTitle}
            placeholder="Title"
          />
          <Divhead>
            <SelectType
              className="form-select"
              id="categoryInput"
              aria-label="category"
              value={category}
              onChange={selectCategory}
            >
              <option value="">Select a category</option>
              {GRIEVANCE_CATEGORIES.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </SelectType>
          </Divhead>
          <Divhead>
            <Select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              disabled
            >
              <option value="">Select</option>
              <option value={LOCATIONS.bangaluru}>Bangaluru</option>
              <option value={LOCATIONS.delhi}>Delhi</option>
              <option value={LOCATIONS.mumbai}>Mumbai</option>
            </Select>

            <GrievanceInputData
              id="location"
              className="btn overflow-auto"
              type="button"
              style={{ background: coordsSelected ? "#bbbaba" : null }}
              disabled={coordsSelected}
              onClick={getCoords}
            >
              {!coordsSelected ? "Get location" : "Location set"}
            </GrievanceInputData>
          </Divhead>
          <TextInputData
            type="text"
            onChange={onChangeDescription}
            value={description}
            placeholder="Please write a comprehensive report..."
          />
          <div className="float-right">
            <FileUpload onUpload={(url) => handleUpload(url)} />
          </div>

          <Error>{message}</Error>
          <div className="col">
            <Button className="btn btn-outline-secondary float-left">
              Cancel
            </Button>
            <Button
              className="btn btn-outline-primary float-right"
              onClick={submitGrievance}
            >
              Submit
            </Button>
          </div>
        </GrievanceForm>
      </GrievanceInner>
    </Container>
  );
}

export default CreateGrievance;
