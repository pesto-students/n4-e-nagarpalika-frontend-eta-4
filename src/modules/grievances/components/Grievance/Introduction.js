/** @format */

import React from "react";
import { Link } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import { BOOTSTRAP_TYPES } from "../../../../common/contants";

import Badge from "../../../../common/components/Badge/Badge";
import getRandomValueFromArray from "../../../../utils/getRandomValueFromArray";

import Button from "../../../../common/components/Buttons/Button";
import Card from "../../../../common/components/Cards/Card";
import StyledAvatar from "../../../../common/components/Avatar/StyledAvatar";
import CardBody from "../../../../common/components/Cards/CardBody";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const Introduction = ({
  id,
  title,
  // userId,
  description,
  images,
  // geoLocation,
  // location,
  category,
  status,
  createdAt,
}) => {
  return (
    <Card shadow className="card mb-5">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="fw-semi-bold mb-2">{title}</h1>
          <Link
            href="#"
            data-bs-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Add to Bookmarks"
            data-bs-original-title=""
          >
            <i className="fe fe-bookmark fs-3 text-inherit"></i>
          </Link>
        </div>
        <div className="d-flex mb-5">
          <span className="d-none d-md-block">
            <svg
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
                fill="#754FFE"
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
            <span>
              {`${status.slice(0, 1)}${status.slice(1).toLowerCase()}`}
            </span>
          </span>
          <span className="ms-4 d-none d-md-block">
            <i className="far fa-clock me-1"></i>
            {timeAgo.format(new Date(createdAt).getTime())}
          </span>
          <span className="ms-4">
            <i className="mdi mdi-star me-n1 text-warning"></i>
            <i className="mdi mdi-star me-n1 text-warning"></i>
            <i className="mdi mdi-star me-n1 text-warning"></i>
            <i className="mdi mdi-star me-n1 text-warning"></i>
            <i className="mdi mdi-star-half-full text-warning"></i>
            {/* <span className="fw-medium">(140)</span> */}
            <Badge
              isPill
              bgColor={getRandomValueFromArray(Object.values(BOOTSTRAP_TYPES))}
            >
              {category}
            </Badge>
          </span>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <StyledAvatar
              src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-1.jpg"
              className="rounded-circle "
              alt=""
              style={{
                width: "50px",
                height: "50px",
              }}
            />
            <div className="ms-2 lh-1">
              <h4 className="mb-1">Mr. XYZ</h4>
              <p className="fs-6 mb-0">@username</p>
            </div>
          </div>
          <div>
            <Button href="#" type="primary" buttonType="button" className="">
              Follow
            </Button>
          </div>
        </div>
      </div>
      <hr style={{ margin: 0 }} />

      <CardBody className="">
        <h3 className="mb-2">Descriptions</h3>
        <p>{description}</p>
      </CardBody>
    </Card>
  );
};

export default Introduction;
