/** @format */

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import { BOOTSTRAP_TYPES } from "../../../../common/contants";

import Card from "../../../../common/components/Cards/Card";
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

const GrievanceListCard = ({
  id,
  title,
  // userId,
  // description,
  images,
  // geoLocation,
  // location,
  accountType,
  category,
  status,
  createdAt,
}) => {
  const cover = images[0];

  return (
    <Card
      className="mb-4 card-hover"
      style={{
        paddingLeft: "0",
        minHeight: "220px",
      }}
    >
      <Row className="g-0" style={{ height: "100%" }}>
        <Link
          className="col-12 col-md-12 col-xl-3 col-lg-3 bg-cover img-left-rounded"
          style={{
            backgroundImage: `url(${cover})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "12px 0 0 12px",
          }}
          to={`/grievances/${id}`}
        >
          <img
            src={cover}
            alt={title}
            className="img-fluid d-lg-none invisible"
            style={{
              borderRadius: "12px 0 0 12px",
            }}
          />
        </Link>
        <Col size={12} sm={12} md={12} lg={9} className="">
          <CardBody
            className=""
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link
              to={`/grievances/${id}`}
              className="text-inherit"
              style={{ textDecoration: "none" }}
            >
              <h3 className="mb-2 text-truncate-line-2 ">
                {title.length < 50 ? title : `${title.slice(0, 50)}...`}
              </h3>
            </Link>
            <div style={{ flexGrow: 1 }} />
            <Row className="">
              <Badge
                isPill
                bgColor={getRandomValueFromArray(
                  Object.values(BOOTSTRAP_TYPES)
                )}
                style={{ width: "auto", marginLeft: "1rem" }}
                className=""
              >
                {category}
              </Badge>
            </Row>
            <ul
              className="list-inline my-2"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <li className="list-inline-item">
                <i className="far fa-clock me-1"></i>
                {timeAgo.format(new Date(createdAt).getTime())}
              </li>
              <li className="list-inline-item">
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
              {/* <li className="list-inline-item">
                <span>
                  <i className="mdi mdi-star text-warning me-n1"></i>
                  <i className="mdi mdi-star text-warning me-n1"></i>
                  <i className="mdi mdi-star text-warning me-n1"></i>
                  <i className="mdi mdi-star text-warning me-n1"></i>
                  <i className="mdi mdi-star text-warning"></i>
                </span>
                <span className="text-warning">4.5</span>
                <span className="fs-6 text-muted">(9,300)</span>
              </li> */}
            </ul>

            <Row className="align-items-center g-0">
              <Col auto className="col-auto">
                <Avatar
                  src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-2.jpg"
                  className="rounded-circle avatar avatar-xs"
                  alt=""
                />
              </Col>
              <div className="col ms-2">
                <span>Morris Mccoy</span>
              </div>
              <div className="col-auto">
                <Link to={`/grievances/${id}`} className="text-muted bookmark">
                  <i className="bi bi-bookmark"></i>
                </Link>
              </div>
            </Row>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default GrievanceListCard;
