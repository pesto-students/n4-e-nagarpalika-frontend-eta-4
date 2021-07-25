/** @format */

import React, { useState } from "react";

import { A, Img, Form, Label, Input, Div } from "./styles";
// import { storage } from "../../modules/auth/api/firebase";
import firebase from "../../common/firebase";

const storage = firebase.storage();

export default function FileUpload(props) {
  const [loading, setLoading] = useState(false);
  const [urls, setURL] = useState([]);


  async function handleUpload(e) {
    setLoading(true);
    try {
      const ref = storage.ref(`/images/${e.target.files[0].name}`);
      console.log("upload started");
      const uploadTask = ref.put(e.target.files[0]);
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((picUrl) => {
          setURL([...urls, picUrl]);
          props.onUpload(picUrl);
        });
        console.log("uploaded");
        setLoading(false);
      });
    } catch (err) {
      console.log(e.toString());
    }
  }

  return (
    <Form>
      {urls.map((url, index) => (
        /* eslint-disable-next-line */
        <Div key={index}>
          <Img src={url} alt="" />
        </Div>
      ))}
      {/* eslint-disable-next-line */}
      <Label>
        {/* eslint-disable-next-line */}
        <Input disabled={loading} type="file" onChange={handleUpload} />
        {/* eslint-disable-next-line */}
        <A>Upload</A>
      </Label>
    </Form>
  );
}
