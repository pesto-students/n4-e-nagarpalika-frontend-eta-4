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
    });
    console.log(location);
    console.log(images);
  };
  const submitGrievance = (e) =>{
    e.preventDefault()
    if(title && category && description && location && images.length>0){
      console.log(title, category, description, location, images)
      props.handleSubmit({title, category, description, location, images})
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
                   onChange={(e)=>setTitle(e.target.value)}
                   placeholder="Title" />
        <Divhead>
          <SelectType onChange={(e)=>setCategory(e.target.value)} value={category}>
            <option value="">Select Issue Type</option>
            <option value="traffic">Road Safety and Traffic</option>
            <option value="electricity">Electricity</option>
            <option value="drainage">Drainage</option>
            <option value="OTH">Other</option>
          </SelectType>
        </Divhead>
        <Divhead>
          <Select>
            <option value="">Select Location</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="bangalore">Bangalore</option>
            <option value="OTH">Other</option>
          </Select>
          <GrievanceInputData
            type="submit"
            value="Get location"
            onClick={getLocation}
          />
        </Divhead>
        <TextInputData
                       type="text"
                       onChange={(e)=>setDescription(e.target.value)}
                       value={description}
                       placeholder="Please write a comprehensive report..."
        />
        <FileUpload onUpload={(url) => setImages([...images, url])} />
        <Error>{message}</Error>
        <Button onClick={submitGrievance}>Submit</Button>
      </GrievanceForm>
    </Container>
  );
}

export default Grievance;
