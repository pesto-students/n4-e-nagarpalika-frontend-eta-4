/** @format */

import React, { useState } from "react";
import axios from "axios";

import { Form, FormFields, Div, P, PTag, SelectTag, Button } from "./styles";

const CreateIssueTypes = () => {
  const [loading, setLoading] = useState(false);
  const [issueType, setIssueType] = useState();
  const [userCity, setCity] = useState();
  const [textColor, setColor] = useState("#f50808");
  const [message, setMessage] = useState("");

  const createIssueType = async () => {
    try {
      const res = await axios.post(
        "/api/admin/action/create-issue-type",
        {
          name: issueType,
          city: userCity,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res) {
        if (res.data.status) {
          setColor("#4bc123");
        } else {
          setColor("#f50808");
        }
        setMessage(res.data.message);
      }
      console.log(res.status, res.data, res.request);
    } catch (err) {
      console.log(err.message);
      setMessage(err.message);
      setColor("#f50808");
    }
  };

  const selectCity = (e) => {
    setCity(e.target.value);
    // console.log(city);
  };
  const onChange = (e) => {
    e.preventDefault();
    setIssueType(e.target.value);
  };
  const onSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    await createIssueType();
  };
  return (
    <Form>
      <Div>
        <PTag>Issue Type:</PTag>
        <FormFields
          id="phone"
          type="text"
          onChnage={onChange}
          placeholder="Name Of the issue type"
          pattern="[0-9]{10}"
          // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
      </Div>
      <Div>
        <PTag> City:</PTag>
        <SelectTag disabled={loading} onChange={selectCity}>
          <option value="BLR">Bengaluru</option>
          <option value="DEL">Delhi</option>
          <option value="HYD">Hyderabad</option>
        </SelectTag>
      </Div>
      <P style={{ color: textColor }}>{message}</P>
      <Button disabled={loading} onClick={onSave}>
        Save
      </Button>
    </Form>
  );
};

export default CreateIssueTypes;
