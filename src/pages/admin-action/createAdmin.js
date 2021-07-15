/** @format */

/** @format */

import React, { useState } from "react";
import axios from "axios";

import {
  Form,
  FormFields,
  Div,
  P,
  PTag,
  Select,
  Button,
  RadioButton,
  Radio,
} from "./styles";

const CreateAdmin = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("Create Admin");
  const [adminSelection, setAdminSelection] = useState(false);
  const [userCity, setCity] = useState();
  const [textColor, setColor] = useState("#f50808");
  const [message, setMessage] = useState("");

  const createAdmin = async () => {
    try {
      const res = await axios.post(
        "/api/admin/action/create-admin",
        {
          phone_no: `+91${phoneNumber}`,
          user_type: parseInt(userType, 10),
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
      setMessage(err.message);
      setColor("#f50808");
    }
  };

  const onMobileSubmit = (e) => {
    const phoneNumberStr = (parseInt(e.target.value, 10) || 0).toString();
    if (phoneNumberStr.length !== 10) {
      setMessage("Please Enter your 10 digit mobile number");
    } else {
      setPhoneNumber(phoneNumberStr);
      setMessage("");
    }
  };

  const onChange = (e) => {
    setUserType(e.target.value);
    if (e.target.value === "1") {
      setAdminSelection(true);
    } else {
      setAdminSelection(false);
    }
    console.log(parseInt(userType, 10));
  };
  const onClick = (e) => {
    setUserType(e.target.value);
    if (e.target.value === "1") {
      setAdminSelection(true);
    } else {
      setAdminSelection(false);
    }
    console.log(parseInt(userType, 10));
  };
  const onApprove = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(phoneNumber, parseInt(userType, 10), userCity);
    createAdmin();
  };
  const selectCity = (e) => {
    setCity(e.target.value);
    // console.log(city);
  };
  return (
    <Form>
      <Div>
        <PTag>Mobile No:</PTag>
        <FormFields
          id="phone"
          type="tel"
          onChange={onMobileSubmit}
          placeholder="Enter the 10 digit Mobile Number"
          pattern="[0-9]{10}"
          // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
      </Div>
      <Div>
        <PTag>Admin Type:</PTag>
        <Radio>
          <RadioButton
            disabled={loading}
            type="radio"
            name="_r51"
            onChange={onChange}
            onClick={onClick}
            checked={userType === "1"}
            value="1"
          />
          Regional
        </Radio>
        <Radio>
          <RadioButton
            disabled={loading}
            type="radio"
            name="_r51"
            onChange={onChange}
            onClick={onClick}
            checked={userType === "2"}
            value="2"
          />
          Central
        </Radio>
      </Div>
      <div />
      {adminSelection ? (
        <Div>
          <PTag>City:</PTag>
          <Select disabled={loading} onChange={selectCity}>
            <option value="BLR">Bengaluru</option>
            <option value="DEL">Delhi</option>
            <option value="HYD">Hyderabad</option>
          </Select>
        </Div>
      ) : (
        <div />
      )}
      <div style={{ flexGrow: 1 }} />
      <P style={{ color: textColor }}>{message}</P>
      <Button disabled={loading} onClick={onApprove}>
        Approve
      </Button>
    </Form>
  );
};
export default CreateAdmin;
