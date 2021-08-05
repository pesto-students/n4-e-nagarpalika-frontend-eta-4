/** @format */

/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { connect, useSelector } from "react-redux";

import FileUpload from "./fileUpload";

import LoginSVG from "../../../common/components/svg/LoginSVG";

import Container from "../../../common/components/Layout/Container";
import Col from "../../../common/components/Layout/Col";
import Row from "../../../common/components/Layout/Row";
import Card from "../../../common/components/Cards/Card";
import { Heading } from "../../../common/components/Typography/Typography";
import Input from "../../../common/components/Form/Input";
import Textarea from "../../../common/components/Form/Textarea";
import Select from "../../../common/components/Form/Select";
import Option from "../../../common/components/Form/Option";
import Button from "../../../common/components/Buttons/Button";

import {
  Error,
  //   Container,
  //   GrievanceForm,
  //   P,
  //   TextInput,
  //   TextInputData,
  //   Divhead,
  //   SelectType,
  //   Select,
  // GrievanceInputData,
  //   Button,
  //   GrievanceInner,
} from "./styles";
import { GRIEVANCE_CATEGORIES, LOCATIONS } from "../../../common/contants";

function CreateGrievance({ onSubmit }) {
  const reduxState = useSelector((state) => state);
  const { account } = reduxState;
  const { location: userLocation } = account;

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
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 75px)",
      }}
    >
      <Card shadow className="p-4">
        <Row>
          <Col
            size={6}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <LoginSVG />
          </Col>
          <Col size={6} className="d-flex flex-column ">
            <Row>
              <Heading size={3}> Create a Grievance</Heading>
            </Row>
            <Row className="mt-2">
              <Input
                id="issue-title"
                value={title}
                onChange={onChangeTitle}
                placeholder="Title"
              />
            </Row>
            <Row className="m-0 mt-1">
              <Select
                id="categoryInput"
                aria-label="category"
                value={category}
                onChange={selectCategory}
                className="my-2 py-3"
              >
                <Option value="">Select a category</Option>
                {GRIEVANCE_CATEGORIES.map((category) => (
                  <Option value={category} key={category}>
                    {category}
                  </Option>
                ))}
              </Select>
            </Row>
            <Row className="m-0 ">
              <Select
                value={userLocation}
                onChange={(e) => setLocation(e.target.value)}
                disabled
                className="my-2 py-3"
              >
                <Option value="">Select Location</Option>
                <Option value={LOCATIONS.bangaluru}>Bangaluru</Option>
                <Option value={LOCATIONS.delhi}>Delhi</Option>
                <Option value={LOCATIONS.mumbai}>Mumbai</Option>
              </Select>
            </Row>
            <Row className="m-1">
              {/* <GrievanceInputData
                id="location"
                className="btn overflow-auto"
                type="button"
                style={{ background: coordsSelected ? "#bbbaba" : null }}
                disabled={coordsSelected}
                onClick={getCoords}
              >
                {!coordsSelected ? "Get location" : "Location set"}
              </GrievanceInputData> */}
              {/* TODO: will improve later */}
              <div
                className="input-group "
                style={{ borderRadius: "12px", padding: "0" }}
              >
                <input
                  type="text"
                  aria-label="Longitude"
                  className="form-control p-3"
                  value={coords[0].toFixed(4)}
                  onChange={() => {}}
                  style={{ borderRadius: "12px 0 0 12px" }}
                  disabled
                />
                <input
                  type="text"
                  aria-label="Latitude"
                  className="form-control p-3"
                  value={coords[1].toFixed(4)}
                  onChange={() => {}}
                  disabled
                />
                <Button
                  type="info"
                  className="input-group-text p-3"
                  style={{
                    borderRadius: "0 12px 12px 0",
                  }}
                  onClick={getCoords}
                >
                  Geo Location
                </Button>
              </div>
            </Row>
            <Row className="m-1 mt-2">
              <Textarea
                onChange={onChangeDescription}
                value={description}
                placeholder="Please write a comprehensive report..."
                className="p-2"
                style={
                  {
                    // width: "98%",
                  }
                }
                rows={5}
              />
            </Row>
            <Row>
              {/* <div className="float-right"> */}
              <FileUpload onUpload={(url) => handleUpload(url)} />
              {/* </div> */}
            </Row>
            <Row>
              <Error>{message}</Error>
            </Row>
            <Row>
              <Col size={12} className="d-flex justify-content-end">
                <Button type="secondary" className="mx-2">
                  Cancel
                </Button>
                <Button
                  type="primary"
                  className="mx-2"
                  onClick={submitGrievance}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Container>
  );

  // return (
  //   <Container>
  //     <GrievanceInner>
  //       <GrievanceForm>
  //         <LoginSVG />
  //       </GrievanceForm>

  //       <GrievanceForm>
  //         <P className="text-primary">
  //           <b>Create a Grievance</b>
  //         </P>
  //         <TextInput
  //           value={title}
  //           onChange={onChangeTitle}
  //           placeholder="Title"
  //         />
  //         <Divhead>
  //           <SelectType
  //             className="form-select"
  //             id="categoryInput"
  //             aria-label="category"
  //             value={category}
  //             onChange={selectCategory}
  //           >
  //             <option value="">Select a category</option>
  //             {GRIEVANCE_CATEGORIES.map((category) => (
  //               <option value={category} key={category}>
  //                 {category}
  //               </option>
  //             ))}
  //           </SelectType>
  //         </Divhead>
  //         <Divhead>
  //           <Select
  //             value={userLocation}
  //             onChange={(e) => setLocation(e.target.value)}
  //             disabled
  //           >
  //             <option value="">Select</option>
  //             <option value={LOCATIONS.bangaluru}>Bangaluru</option>
  //             <option value={LOCATIONS.delhi}>Delhi</option>
  //             <option value={LOCATIONS.mumbai}>Mumbai</option>
  //           </Select>

  //           <GrievanceInputData
  //             id="location"
  //             className="btn overflow-auto"
  //             type="button"
  //             style={{ background: coordsSelected ? "#bbbaba" : null }}
  //             disabled={coordsSelected}
  //             onClick={getCoords}
  //           >
  //             {!coordsSelected ? "Get location" : "Location set"}
  //           </GrievanceInputData>
  //         </Divhead>
  //         <TextInputData
  //           type="text"
  //           onChange={onChangeDescription}
  //           value={description}
  //           placeholder="Please write a comprehensive report..."
  //         />
  //         <div className="float-right">
  //           <FileUpload onUpload={(url) => handleUpload(url)} />
  //         </div>

  //         <Error>{message}</Error>
  //         <div className="col">
  //           <Button className="btn btn-outline-secondary float-left">
  //             Cancel
  //           </Button>
  //           <Button
  //             className="btn btn-outline-primary float-right"
  //             onClick={submitGrievance}
  //           >
  //             Submit
  //           </Button>
  //         </div>
  //       </GrievanceForm>
  //     </GrievanceInner>
  //   </Container>
  // );
}

export default CreateGrievance;
