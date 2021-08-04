/** @format */

import React, { useState } from "react";

import { A, Img, Form, Label, Input, Div } from "./styles";
// import { storage } from "../../modules/auth/api/firebase";
import firebase from "../../../common/firebase";

const storage = firebase.storage();

export default function FileUpload(props) {
  const [loading, setLoading] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [urls, setURL] = useState([]);

  async function handleUpload(e) {
    setLoading(true);
    try {
      const ref = storage.ref(`/images/${e.target.files[0].name}`);
      // console.log("upload started");
      const uploadTask = ref.put(e.target.files[0]);
      uploadTask.on("state_changed", console.log, console.error, () => {
        // console.log(snapshot.bytesTransferred,snapshot.totalBytes)
        setProgressPercent(50);
        ref.getDownloadURL().then((picUrl) => {
          setURL([...urls, picUrl]);
          props.onUpload(picUrl);
        });
        // console.log("uploaded");
        setProgressPercent(100);
        setLoading(false);
      });
    } catch (err) {
      // console.log(e.toString());
    }
  }

  return (
    <Form>
      {/*<div className="overflow-auto">*/}
      {urls.map((url, index) => (
        /* eslint-disable-next-line */
        <Div key={index}>
          <Img src={url} alt="" />
        </Div>
      ))}
      {loading && (
        <Div className="text-center">
          <div className="progress" style={{ height: "5px", width: "50px" }}>
            <div
              id="progressbar"
              className="progress-bar bg-success"
              role="progressbar"
              style={{
                width: `${progressPercent}%`,
              }}
              aria-label="Issue Resolution bar"
            />
          </div>
        </Div>
      )}
      {/*</div>*/}
      {/* eslint-disable-next-line */}
      <Label>
        {/* eslint-disable-next-line */}
        <Input
          disabled={loading || urls.length > 3}
          type="file"
          onChange={handleUpload}
        />
        {/* eslint-disable-next-line */}
        <A>Upload</A>
      </Label>
    </Form>
  );
}
