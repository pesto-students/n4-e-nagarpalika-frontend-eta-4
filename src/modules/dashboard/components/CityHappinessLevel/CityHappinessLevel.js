/** @format */

import React from "react";
import PropTypes from "prop-types";
import ReactSpeedometer from "react-d3-speedometer";

import Card from "../../../../common/components/Cards/Card";
import CardHeader from "../../../../common/components/Cards/CardHeader";
import CardBody from "../../../../common/components/Cards/CardBody";
import { Heading } from "../../../../common/components/Typography/Typography";

/* Reference https://palerdot.in/react-d3-speedometer/?path=/story/reactspeedometer--default-with-no-config */

const CityHappinessLevel = ({ value }) => {
  return (
    <Card shadow className="mb-4 h-100">
      <CardHeader className="py-3 d-flex flex-row align-items-center justify-content-between">
        <Heading size={6} className="m-0 font-weight-bold text-dark">
          City happiness level
        </Heading>
      </CardHeader>
      <CardBody className="">
        <div className="text-center">
          <ReactSpeedometer
            minValue={0}
            maxValue={100}
            value={value}
            // segments={5}
            maxSegmentLabels={5}
            segments={1000}
            needleHeightRatio={0.5}
            currentValueText="Good"
            needleTransitionDuration={3333}
            needleTransition="easeElastic"
            width={240}
            height={(240 * 3) / 4}
            // customSegmentStops={[0, 250, 500, 750, 1000]}
            // segmentColors={["#9399ff", "#14ffec", "#00bbf0"]}
            // currentValueText="How are you?"
            // customSegmentLabels={[
            //   {
            //     text: "Very Bad",
            //     position: "INSIDE",
            //     color: "#555",
            //   },
            //   {
            //     text: "Bad",
            //     position: "INSIDE",
            //     color: "#555",
            //   },
            //   {
            //     text: "Ok",
            //     position: "INSIDE",
            //     color: "#555",
            //     fontSize: "19px",
            //   },
            //   {
            //     text: "Good",
            //     position: "INSIDE",
            //     color: "#555",
            //   },
            //   {
            //     text: "Very Good",
            //     position: "INSIDE",
            //     color: "#555",
            //   },
            // ]}
          />
        </div>
        <p>
          Based on grievances resolved your city is categorized “Good”. We are
          constantly upgrading our facilities to give you a better experience!
        </p>
      </CardBody>
    </Card>
  );
};

CityHappinessLevel.propTypes = {
  value: PropTypes.number,
};

CityHappinessLevel.defaultProps = {
  value: 0,
};

export default CityHappinessLevel;
