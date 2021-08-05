/** @format */

import React from "react";
import PropTypes from "prop-types";

import Card from "../../../../common/components/Cards/Card";
import CardBody from "../../../../common/components/Cards/CardBody";
import Row from "../../../../common/components/Layout/Row";
import Col from "../../../../common/components/Layout/Col";
import { Heading } from "../../../../common/components/Typography/Typography";

import { BOOTSTRAP_TYPES } from "../../../../common/contants";

const StatusCard = ({ title, logo, count, bgColor }) => (
  <Card shadow className="border-left-primary h-100 py-2">
    <CardBody className="">
      <Row className="no-gutters align-items-center">
        <Col col className="mr-2">
          <div
            className={`text-xs font-weight-bold text-${bgColor} text-uppercase mb-1`}
          >
            {title}
          </div>
          <Heading size={5} className="mb-0 font-weight-bold text-gray-800">
            {count}
          </Heading>
        </Col>
        <Col auto className="">
          <i className={`fas fa-${logo} fa-2x text-${bgColor}`} />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

StatusCard.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  bgColor: PropTypes.arrayOf(Object.values(BOOTSTRAP_TYPES)).isRequired,
};

export default StatusCard;
