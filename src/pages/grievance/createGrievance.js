/** @format */

import React, { useState } from "react";

import FileUpload from "./fileUpload";

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
} from "./styles";
import { GRIEVANCE_CATEGORIES } from "../../common/contants";

function Grievance(props) {
  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState()
  const [location, setLocation] = useState();
  const [images, setImages] = useState([]);
  const [message, setMessage] =useState("")

  const getLocation = (e) => {
    e.preventDefault();
    window.navigator.geolocation.getCurrentPosition((position) => {
      setLocation(`${position.coords.latitude},${position.coords.longitude}`);
      props.location(`${position.coords.latitude},${position.coords.longitude}`);
    });
    console.log(location);
    console.log(images);
  };
  const selectCategory = (e) => {
    setCategory(e.target.value);
    props.category(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    props.title(e.target.value);
  };
  const handleUpload = (url) => {
    setImages([...images, url]);
    props.image(url)
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
    props.description(e.target.value)
  };
  const submitGrievance = (e) =>{
    e.preventDefault()
    if(title && category && description && location && images.length>0){
      console.log(title, category, description, location, images)
      props.handleSubmit(e)
      setMessage("")
    }
    else {
      setMessage("**Please fill all the fields correctly")
    }

  }
  return (
    <Container>
      <GrievanceForm>
        <P>
          <b>Create a Grievance</b>
        </P>
        <TextInput value={title}
                   onChange={onChangeTitle}
                   placeholder="Title" />
        <Divhead>
          <SelectType className="form-select"
                      id="categoryInput"
                      aria-label="category"
                      value={category}
                      onChange={selectCategory}
          >
            <option value="">Select</option>
            {GRIEVANCE_CATEGORIES.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
            ))}
          </SelectType>
        </Divhead>
        <Divhead>
          <Select
              disabled={true} value={"bangalore"}>
            <option value="">Select Location</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="bangalore">Bangalore</option>
            <option value="OTH">Other</option>
          </Select>
          {/*<a className="btn btn-primary col-12" type="button" href={`/grievances/${id}`}>*/}
          {/*  See More*/}
          {/*</a>*/}
          <GrievanceInputData id="location" className="btn btn-primary" type="button"
            onClick={getLocation}
          >Get location</GrievanceInputData>
        </Divhead>
        <TextInputData
                       type="text"
                       onChange={onChangeDescription}
                       value={description}
                       placeholder="Please write a comprehensive report..."
        />
        <FileUpload onUpload={(url) => handleUpload(url)} />
        <Error>{message}</Error>
        <div className="col" >
          <Button className="btn btn-outline-secondary float-left">Cancel</Button>
          <Button className="btn btn-outline-primary float-right" onClick={submitGrievance}>Submit</Button>
        </div>
      </GrievanceForm>
    </Container>
  );
}

export default Grievance;
