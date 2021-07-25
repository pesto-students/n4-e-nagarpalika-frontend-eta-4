/** @format */

/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ReactSpeedometer from "react-d3-speedometer";
import { connect, useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  BarChart,
} from "recharts";

import { LOCATIONS } from "../../common/contants";

import IssueStatus from "../../modules/dashboard/components/IssueStatusCard/IssueStatus";

import { Container } from "./styles";

function Dashboard() {
  const reduxState = useSelector((state) => state);
  const { account } = reduxState;

  const [location, setLocation] = useState(LOCATIONS.bangaluru);
  const history = useHistory();

  const dataByDate = [
    {
      date: "Jun 2021",
      total: 4000,
      progress: 2400,
      resolved: 1600,
    },
    {
      date: "Jul 2021",
      total: 3000,
      progress: 1398,
      resolved: 1602,
    },
    {
      date: "Aug 2021",
      total: 2000,
      progress: 1800,
      resolved: 200,
    },
    {
      date: "Sept 2021",
      total: 2780,
      progress: 1908,
      resolved: 872,
    },
    {
      date: "Oct 2021",
      total: 1890,
      progress: 400,
      resolved: 1490,
    },
    {
      date: "Nov 2021",
      total: 2390,
      progress: 1800,
      resolved: 590,
    },
    {
      date: "Dec 2021",
      total: 3490,
      progress: 300,
      resolved: 3190,
    },
  ];

  const dataByCategory = [
    {
      name: "Road Safety & Traffic",
      2020: 4000,
      2021: 2400,
    },
    {
      name: "Electricity",
      2020: 3000,
      2021: 1398,
    },
    {
      name: "Ration Service",
      2020: 2000,
      2021: 5800,
    },
    {
      name: "Housing and Development",
      2020: 2780,
      2021: 3908,
    },
    {
      name: "Water Delivery",
      2020: 1890,
      2021: 4800,
    },
    {
      name: "Sanitation",
      2020: 2390,
      2021: 3800,
    },
    {
      name: "Vigilance & Anti-corruption",
      2020: 3490,
      2021: 4300,
    },
    {
      name: "Public Safety",
      2020: 3490,
      2021: 4300,
    },
    {
      name: "Healthcare",
      2020: 3490,
      2021: 4300,
    },
  ];

  return (
    <Container className="container">
      <div className="row">
        <div className="col-4 p-3">
          <div className="mb-3">
            {/* <label htmlFor="locationInput" className="form-label">
              Location*
            </label> */}
            <select
              className="form-select"
              id="locationInput"
              aria-label="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              <option value={LOCATIONS.bangaluru}>Bangaluru</option>
              <option value={LOCATIONS.delhi}>Delhi</option>
              <option value={LOCATIONS.mumbai}>Mumbai</option>
            </select>
          </div>
          <IssueStatus />
          {/* Reference https://palerdot.in/react-d3-speedometer/?path=/story/reactspeedometer--default-with-no-config */}
          <div className="card mt-3">
            <div className="card-body">
              <ReactSpeedometer
                minValue={0}
                maxValue={100}
                value={23}
                // segments={5}
                maxSegmentLabels={5}
                segments={1000}
                needleHeightRatio={0.5}
                currentValueText="City Happiness Level"
                needleTransitionDuration={3333}
                needleTransition="easeElastic"
                width={300}
                height={(300 * 3) / 4}
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
          </div>
        </div>
        <div className="col-8 p-3">
          <div className="card mb-3" style={{ height: "400px" }}>
            <div className="card-body">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={dataByDate}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#607d8b"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="progress" stroke="#ff9800" />
                  <Line type="monotone" dataKey="resolved" stroke="#4caf50" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="card" style={{ height: "400px" }}>
            <div className="card-body">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={dataByCategory}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="2 2" />
                  <XAxis dataKey="name" angle={-35} padding={50} hide />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="2020" fill="#8884d8" />
                  <Bar dataKey="2021" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Dashboard;
