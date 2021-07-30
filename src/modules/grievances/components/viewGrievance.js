/** @format */

/* eslint-disable no-unused-vars */

import React, { useRef, useState } from "react";

import ProgressBar from "./progressBar";
import ImageSlider from "./imageSlider";

import {
  GrievanceContainer,
  DivHead,
  GrievanceBody,
  GrievanceImage,
  PGrievance,
  Header,
  AGrievance,
  Text,
  TakeActionButton,
  GrievanceTextInput,
  ButtonPost,
} from "./styles";

const ViewGrievance = ({ grievanceData }) => {
  const textRef = useRef();
  const [issueStatus, setIssueStatus] = useState();
  const [comment, setComment] = useState("");

  const { geoLocation } = grievanceData;
  const [lng, lat] = geoLocation.coordinates;

  const updateStatus = (e) => {
    e.preventDefault();
    // console.log(textRef.current.value);
    // console.log(issueStatus);
  };

  const postComment = (e) => {
    e.preventDefault();
    // console.log(comment);
  };

  const handleClick = (e) => {
    e.preventDefault();

    const link = `http://www.google.com/maps/place/${lat},${lng}`;
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <GrievanceContainer>
      <DivHead>
        <GrievanceBody>
          <GrievanceImage>
            <ImageSlider SliderData={grievanceData.images} />
            <ProgressBar />
            <PGrievance>{grievanceData.category}</PGrievance>
          </GrievanceImage>
          <GrievanceImage>
            <Header>{grievanceData.title}</Header>
            {/* eslint-disable-next-line */}
            <AGrievance onClick={handleClick} href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 20"
                width="16px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 4c1.93 0 5 1.4 5 5.15 0 2.16-1.72 4.67-5 7.32-3.28-2.65-5-5.17-5-7.32C7 5.4 10.07 4 12 4m0-2C8.73 2 5 4.46 5 9.15c0 3.12 2.33 6.41 7 9.85 4.67-3.44 7-6.73 7-9.85C19 4.46 15.27 2 12 2z" />
                <path d="M12 7c-1.1 0-2 .9-2 2s.9 2 2 2a2 2 0 1 0 0-4zM5 20h14v2H5v-2z" />
              </svg>
              Location
            </AGrievance>
            <Text>Created: {grievanceData.createdAt}</Text>
            <Text>{grievanceData.description}</Text>
            <TakeActionButton
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Update Status
            </TakeActionButton>
          </GrievanceImage>
        </GrievanceBody>
        <GrievanceBody>
          <Text />
          <Text>This is a comment</Text>
        </GrievanceBody>
        <GrievanceBody>
          <GrievanceTextInput onChange={(e) => setComment(e.target.value)} />
          <ButtonPost
            type="button"
            onClick={postComment}
            className="btn btn-primary"
          >
            Post
          </ButtonPost>
        </GrievanceBody>
      </DivHead>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Updating status of the issue {grievanceData.id}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body row">
              <div className="btn-group">
                <select
                  className="btn border-secondary"
                  value={issueStatus}
                  onChange={(e) => setIssueStatus(e.target.value)}
                >
                  Action
                  <option value="review">Reviewed</option>
                  <option value="action">Action Taken</option>
                </select>
              </div>
              <GrievanceTextInput
                ref={textRef}
                placeholder="Please add a comment..."
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={updateStatus}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </GrievanceContainer>
  );
};

export default ViewGrievance;
