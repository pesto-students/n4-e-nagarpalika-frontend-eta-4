/** @format */

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import the component
import ReactSpeedometer from "react-d3-speedometer";
// and just use it

import IssueStatus from "../../modules/dashboard/components/IssueStatusCard/IssueStatus";

import { Container } from "./styles";

function Dashboard() {
  const [location, setLocation] = useState("");
  const history = useHistory();

  useEffect(() => {
    //
  }, []);

  return (
    <Container className="container">
      <div className="row">
        <div className="col-4">
          <IssueStatus />
          {/* Reference https://palerdot.in/react-d3-speedometer/?path=/story/reactspeedometer--default-with-no-config */}
          <ReactSpeedometer
            minValue={0}
            maxValue={100}
            value={85}
            // segments={5}
            maxSegmentLabels={5}
            segments={1000}
            needleHeightRatio={0.5}
            currentValueText="City Happiness Level"
            needleTransitionDuration={3333}
            needleTransition="easeElastic"
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
        <div className="col-8"></div>
      </div>
    </Container>
  );
}

export default Dashboard;
