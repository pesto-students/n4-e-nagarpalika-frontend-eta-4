/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import ProgressBar from "./../../modules/grievances/components/progressBar";
import { GrievanceTextInput, PGrievance } from "./styles";
import {
  ActionCorner,
  Card,
  ATag,
  ButtonDiv,
  Text,
  CardFooter,
  Button,
  CardCarousel,
  Description,
  ProgressHead,
  Image,
  Comments,
} from "./viewGrievanceStyle";
import { ACCOUNT_TYPE, GRIEVANCE_STATUS } from "../../common/contants";

const ViewGrievance = ({ data }) => {
  const textRef = useRef();
  const [issueStatus, setIssueStatus] = useState();
  const [comments, setComments] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [comment, setComment] = useState("");
  const reduxState = useSelector((state) => state);
  const { account } = reduxState;
  const { accountType } = account;

  useEffect(() => {
    setComments([
      {
        from: "user",
        comment:
          "Comment vcsshiusadfkdafkjahfhafkhafgafafakfafahghgdfhgffgjfjhfjk from User",
      },
      {
        from: "admin",
        comment: "Comment from admin",
      },
      {
        from: "admin",
        comment:
          "Comment vcsshiusadfkdafkjahffwfwfsdfsdfsdfsfsfwfgfgfwfwfw wefwefwefwefwf from admin",
      },
      {
        from: "user",
        comment: "Comment from user",
      },
      {
        from: "user",
        comment:
          "Comment vcsshiusadfkdafkjahfhafkhafgafafakfafahghgdfhgffgjfjhfjk from User",
      },
      {
        from: "admin",
        comment: "Comment from admin",
      },
      {
        from: "admin",
        comment:
          "Comment vcsshiusadfkdafkjahffwfwfsdfsdfsdfsfsfwfgfgfwfwfw wefwefwefwefwf from admin",
      },
    ]);
  }, []);
  // console.log(data);
  const updateStatus = (e) => {
    e.preventDefault();
    // console.log(textRef.current.value);
    // console.log(issueStatus);
  };
  const postComment = (e) => {
    e.preventDefault();
    // console.log(comment);
  };
  // const data={
  //     category: "Road Safety & Traffic",
  //     createdAt: "2021-07-24T21:32:06.997Z",
  //     description: "Hello Sir, therehbdshbfdgbhsfdgbgdhbsghfghnfbnfb bxvcbvzxvbzxfgvzgfdszxgvzdfgbfdvfsgas gfs gfaesr fgsdvfsfadfvrtgvsrtastawrt4wgerytbeyearbhyeratge4awtwe5trvtbftawt has been a problem with the Traffic light near HSR Layout Sector 5. Please find the pictures in the attachment. Would be better if you can look into it in a better way.",
  //     id: "60fc86d6126fe5023c98ed0a",
  //     images: ["https://picsum.photos/id/1/400/400",
  //             "https://picsum.photos/id/2/400/400",
  //             "https://picsum.photos/id/3/400/400",
  //             "https://picsum.photos/id/4/400/400"],
  //     location: "20.29836,85.8629852",
  //     title: "Broken Traffic Light Near HSR Layout Sector 5",
  //     updatedAt: "2021-07-24T21:32:06.997Z",
  //     userId: "60f99c0b997cf701d2b3832e",
  //
  // }
  const markAsResolved = (e) => {
    e.preventDefault();
  };
  const handleClick = (e) => {
    e.preventDefault();

    const link = `https://maps.google.com/?q=${data.location}`;
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="container-fluid row justify-content-md-center">
      <Card className="container card col-xl-7">
        <p className="h4 card-header">Issue Id: {data.id}</p>
        <div className="card-body container-fluid row justify-content-md-center">
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
                {data.images.slice(1).map((image) => (
                  <div className="carousel-item">
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
          <div className="card-text col col-xl-6">
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

            <Description className="card-text overflow-auto h6">
              <Text>{data.description}</Text>
            </Description>
            <ButtonDiv>
              {accountType !== ACCOUNT_TYPE.user &&
              issueStatus !== GRIEVANCE_STATUS.action ? (
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  type="button"
                  className="btn btn-primary"
                >
                  {" "}
                  Update Issue
                </button>
              ) : null}
              {accountType === ACCOUNT_TYPE.user &&
              issueStatus === GRIEVANCE_STATUS.action ? (
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
        <div className="card-body">
          <Comments
            className="card-text overflow-auto text-wrap border"
            style={{ height: "50%" }}
          >
            {comments.map((comment) =>
              comment.from === "user" ? (
                <div style={{ width: "80%", margin: "20px" }}>
                  <div className="alert alert-primary text-wrap d-flex float-start">
                    <div className="text-wrap" style={{ width: "100%" }}>
                      {comment.comment}
                    </div>
                  </div>
                  <br />
                </div>
              ) : (
                <div
                  style={{ width: "80%", margin: "20px" }}
                  className="alert alert-warning d-flex float-end text-wrap"
                  role="alert"
                >
                  <div className="text-wrap" style={{ width: "100%" }}>
                    {comment.comment}{" "}
                  </div>
                  <br />
                </div>
              )
            )}
          </Comments>
          <CardFooter className="form-control card-footer">
            <textarea
              onChange={(e) => setComment(e.target.value)}
              className="form-control col"
              placeholder="Please add your comment..."
            />

            <Button
              type="button"
              className="btn btn-primary row"
              onClick={postComment}
            >
              Post
            </Button>
          </CardFooter>
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
