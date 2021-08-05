/** @format */

import React from "react";
import PropTypes from "prop-types";

import Card from "../../../../common/components/Cards/Card";
import CardBody from "../../../../common/components/Cards/CardBody";
import Row from "../../../../common/components/Layout/Row";
import Col from "../../../../common/components/Layout/Col";
import { Heading } from "../../../../common/components/Typography/Typography";

const ProgressCard = ({ progressPercent }) => (
  <Card shadow className="border-left-info shadow h-100 py-2">
    <CardBody className="card-body">
      <Row className="row no-gutters align-items-center">
        <Col col className="col mr-2">
          <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
            Progress
          </div>
          <Row className="row no-gutters align-items-center">
            <Col auto className="">
              <Heading
                size={5}
                className="mb-0 mr-3 font-weight-bold text-gray-800"
              >
                {progressPercent}%
              </Heading>
            </Col>
            <Col col className="">
              <div className="progress progress-sm mr-2">
                <div
                  id="progressbar"
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{
                    width: `${progressPercent}%`,
                  }}
                  aria-label="Issue Resolution bar"
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col auto className="">
          <i className="fas fa-clipboard-list fa-2x text-info" />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

ProgressCard.propTypes = {
  progressPercent: PropTypes.number.isRequired,
};

export default ProgressCard;
