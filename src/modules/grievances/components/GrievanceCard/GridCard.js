/** @format */

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import { BOOTSTRAP_TYPES } from "../../../../common/contants";

import Card from "../../../../common/components/Cards/Card";
// import CardHeader from "../../../../common/components/Cards/CardHeader";
import CardFooter from "../../../../common/components/Cards/CardFooter";
import CardBody from "../../../../common/components/Cards/CardBody";
import Col from "../../../../common/components/Layout/Col";
import Row from "../../../../common/components/Layout/Row";
import Badge from "../../../../common/components/Badge/Badge";
import getRandomValueFromArray from "../../../../utils/getRandomValueFromArray";

const Avatar = styled.img`
  width: 24px;
  height: 24px;
`;

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const GrievanceCard = ({
  id,
  title,
  // userId,
  // description,
  images,
  // geoLocation,
  // location,
  category,
  status,
  createdAt,
}) => {
  const cover = images[0] || "";

  return (
    <Card shadow className="mb-4 card-hover" style={{ height: "100%" }}>
      <Link to={`/grievances/${id}`} className="card-img-top">
        <img
          src={cover}
          // src="https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-react.jpg"
          alt=""
          className="card-img-top"
          style={{
            borderRadius: "12px 12px 0 0",
          }}
        />
      </Link>
      <CardBody
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "space-between",
        }}
      >
        <Link
          to={`/grievances/${id}`}
          className="text-inherit"
          style={{ textDecoration: "none" }}
        >
          <h4
            className="mb-2 text-truncate-line-2 text-muted"
            style={{ textDecoration: "none" }}
          >
            {title.length < 50 ? title : `${title.slice(0, 50)}...`}
          </h4>
        </Link>
        <div style={{ flexGrow: 1 }} />

        <ul
          className="list-inline mb-2"
          style={{
            margin: 0,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <li className="list-inline-item" style={{ margin: 0 }}>
            <i className="far fa-clock me-1"></i>
            {timeAgo.format(new Date(createdAt).getTime())}
          </li>
          <li className="list-inline-item" style={{ margin: 0 }}>
            <svg
              className="me-1 mt-n1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="8"
                width="2"
                height="6"
                rx="1"
                fill="#754FFE"
              ></rect>
              <rect
                x="7"
                y="5"
                width="2"
                height="9"
                rx="1"
                fill="#DBD8E9"
              ></rect>
              <rect
                x="11"
                y="2"
                width="2"
                height="12"
                rx="1"
                fill="#DBD8E9"
              ></rect>
            </svg>
            {`${status.slice(0, 1)}${status.slice(1).toLowerCase()}`}
          </li>
        </ul>
        <div className="lh-1">
          <span>
            <i className="mdi mdi-star text-warning me-n1"></i>
            <i className="mdi mdi-star text-warning me-n1"></i>
            <i className="mdi mdi-star text-warning me-n1"></i>
            <i className="mdi mdi-star text-warning me-n1"></i>
            <i className="mdi mdi-star text-warning"></i>
          </span>
          {/* <span className="text-warning">4.5</span> */}
          {/* <span className="fs-6 text-muted">(7,700)</span> */}
          <Badge
            isPill
            bgColor={getRandomValueFromArray(Object.values(BOOTSTRAP_TYPES))}
          >
            {category}
          </Badge>
        </div>
      </CardBody>
      <CardFooter className="">
        <Row className="align-items-center g-0">
          <Col auto className="">
            <Avatar
              src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-2.jpg"
              className="rounded-circle avatar avatar-xs"
              alt=""
            />
          </Col>
          <Col col className=" ms-2">
            <span>Mr. XYZ</span>
          </Col>
          <Col auto className="">
            <Link href="#" className="text-muted bookmark">
              <i className="bi bi-bookmark"></i>
            </Link>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  );
};

export default GrievanceCard;
