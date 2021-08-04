/** @format */

import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

import ProgressBar from "./progressBar";
import {
  GrievanceTextInput,
  PGrievance,
} from "../../../pages/grievance/styles";
import {
  ActionCorner,
  Card,
  ATag,
  ButtonDiv,
  Text,
  CardCarousel,
  Description,
  ProgressHead,
  Image,
} from "./viewGrievanceStyle";
import { ACCOUNT_TYPE, GRIEVANCE_STATUS } from "../../../common/contants";

import CreateComments from "./CreateComment";
import CommentList from "./CommentList";
import { updateIssue } from "../actionCreators";

const ViewGrievance = ({ data, updateIssue }) => {
  const textRef = useRef();
  const [issueStatus, setIssueStatus] = useState();
  const reduxState = useSelector((state) => state);
  const { account } = reduxState;
  const { accountType } = account;
  const { id: issueId } = data;
  console.log(data);
  // console.log(data);
  const updateStatus = (e) => {
    e.preventDefault();
    // console.log(textRef.current.value);
    // console.log(issueStatus);
  };

  const markAsResolved = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    e.preventDefault();

    const link = `https://maps.google.com/?q=${data.geoLocation.coordinates}`;
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="container-fluid row justify-content-md-center">
      <Card className="container card col-xl-7">
        <p className="card-header text-secondary">Issue Id: {data.id}</p>
        <div
          className="card-body row justify-content-md-center"
          style={{ height: "80%" }}
        >
          <ActionCorner className="col col-xl-6">
            <div>
              <CardCarousel
                id="carouselExampleIndicators"
                className="container-fluid carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Image
                      src={data.images[0]}
                      className="d-block w-100"
                      alt=""
                    />
                  </div>
                  {data.images.slice(1).map((image, index) => (
                    <div className="carousel-item" key={`${image}-${index}`}>
                      <Image src={image} className="d-block w-100" alt="" />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span aria-hidden="true">
                    <i className="fas fa-arrow-circle-left h2 text-primary" />
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span aria-hidden="true">
                    <i className="fas fa-arrow-circle-right h2 text-primary" />
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
              </CardCarousel>
            </div>
            <ProgressHead>
              <ProgressBar issueStatus={data.status} />
            </ProgressHead>
            <PGrievance>{`# ${data.category}`}</PGrievance>
          </ActionCorner>
          <div className="card-text col col-xl-6" style={{ height: "80%" }}>
            <h4 className="h3">{data.title}</h4>
            <hr />
            <p className="h6">
              <i className="far fa-calendar" />
              {"  "}
              {data.createdAt.slice(0, 10)}
              {"  "}
              <i className="far fa-clock" />
              {"  "}
              {data.createdAt.slice(11, -5)}
            </p>
            <ATag
              className="card-text fst-italic"
              onClick={handleClick}
              href="#"
            >
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
            </ATag>
            <div style={{ height: "5px" }} />
            <Description className="card-text overflow-auto h6">
              <Text>{data.description}</Text>
            </Description>
            <ButtonDiv>
              {accountType !== ACCOUNT_TYPE.user &&
              data.status !== GRIEVANCE_STATUS.action ? (
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  type="button"
                  className="btn btn-primary"
                >
                  Update Issue
                </button>
              ) : null}
              {accountType === ACCOUNT_TYPE.user &&
              data.status === GRIEVANCE_STATUS.action ? (
                <button
                  onClick={markAsResolved}
                  type="button"
                  className="btn btn-primary"
                >
                  Resolve
                </button>
              ) : null}
            </ButtonDiv>
          </div>
        </div>
      </Card>
      <Card className="card col col-xl-4">
        <p className="h4 card-header text-center">Comments</p>
        <div className="card-body" style={{ height: "100%" }}>
          <CommentList issueId={issueId} />
          <CreateComments issueId={issueId} />
        </div>
      </Card>
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
                Updating status of the issue {data.id}
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
                  <option value={GRIEVANCE_STATUS.review}>Reviewed</option>
                  <option value={GRIEVANCE_STATUS.action}>Action Taken</option>
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
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewGrievance;
