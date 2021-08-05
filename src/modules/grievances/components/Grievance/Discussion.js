/** @format */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
// import classnames from "classnames";

import Button from "../../../../common/components/Buttons/Button";
import Textarea from "../../../../common/components/Form/Textarea";
import Card from "../../../../common/components/Cards/Card";
import StyledAvatar from "../../../../common/components/Avatar/StyledAvatar";
import CardBody from "../../../../common/components/Cards/CardBody";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

let comments = [
  {
    id: "asdfadsfadfasdf",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 1000 * 60 * 60)
    ).toISOString(),
    userId: "1234qewrqdsafasd",
    name: "Mr. XYZ",
  },
  {
    id: "asdfadsfadfasdf",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 3000 * 60 * 60)
    ).toISOString(),
    userId: "1234qewrqdsafasd",
    name: "Mr. XYZ",
  },
  {
    id: "asdfadsfadfasdf",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 6000 * 60 * 60)
    ).toISOString(),
    userId: "1234qewrqdsafasd",
    name: "Mr. XYZ",
  },
  {
    id: "asdfadsfadfasdf",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 9000 * 60 * 60)
    ).toISOString(),
    userId: "1234qewrqdsafasd",
    name: "Mr. XYZ",
  },
  {
    id: "asdfadsfadfasdf",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 5000 * 60 * 60)
    ).toISOString(),
    userId: "1234qewrqdsafasd",
    name: "Mr. XYZ",
  },
];

const Comment = ({ id, title, createdAt, userId, name }) => {
  return (
    <div className="d-flex border-bottom pb-4 mb-4">
      <StyledAvatar
        src={`https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-${
          1 + Math.floor(Math.random() * 10)
        }.jpg`}
        className="rounded-circle"
        alt=""
        style={{
          width: "50px",
          height: "50px",
        }}
      />
      <div className=" ms-3">
        <h4 className="mb-1">
          {`${name} `}
          <span className="ms-1 fs-6 text-muted">
            {timeAgo.format(new Date(createdAt).getTime())}
          </span>
        </h4>
        <div className="fs-6 mb-2">
          <i className="mdi mdi-star me-n1 text-warning"></i>
          <i className="mdi mdi-star me-n1 text-warning"></i>
          <i className="mdi mdi-star me-n1 text-warning"></i>
          <i className="mdi mdi-star me-n1 text-warning"></i>
          <i className="mdi mdi-star me-n1 text-warning"></i>
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
};

const Discussion = ({ issueId, account }) => {
  const { id: userId, name } = account;
  const [title, setTitle] = useState("");

  return (
    <Card shadow className="mb-5">
      <CardBody className="border-bottom" style={{ display: "flex" }}>
        <StyledAvatar
          src={`https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-${
            1 + Math.floor(Math.random() * 10)
          }.jpg`}
          className="rounded-circle"
          alt=""
          style={{
            width: "50px",
            height: "50px",
          }}
        />
        <Textarea
          placeholder="Comment here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="ms-3"
        />
        <Button
          type="primary"
          style={{
            height: "fit-content",
            // alignSelf: "center",
          }}
          className="ms-2"
          onClick={() => {
            comments = [
              {
                ...comments[0],
                title,
                name,
                createdAt: new Date().toISOString(),
              },
              ...comments,
            ];
            setTitle("");
          }}
        >
          Submit
        </Button>
      </CardBody>
      <CardBody className="">
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </CardBody>
    </Card>
  );
};

export default Discussion;
