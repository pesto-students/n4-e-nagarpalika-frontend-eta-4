/** @format */

/* eslint-disable no-unused-vars */

import React, { useState } from "react";
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

import { ACCOUNT_TYPE } from "../../common/contants";
import { LOCATIONS } from "../../common/contants";

import IssueStatus from "../../modules/dashboard/components/IssueStatusCard/IssueStatus";

import {Container, Flex} from "./styles";

function Dashboard() {
  const reduxState = useSelector((state) => state);
  const { account } = reduxState;
  const { id: userId, accountType, location: userLocation } = account;

  const [location, setLocation] = useState(userLocation);
  const history = useHistory();

  const dataByDate = [
    {
      date: "Jan 2021",
      Total: 4000,
      Progress: 2400,
      Resolved: 1600,
    },
    {
      date: "Feb 2021",
      Total: 3000,
      Progress: 1398,
      Resolved: 1602,
    },
    {
      date: "Mar 2021",
      Total: 2000,
      Progress: 1800,
      Resolved: 200,
    },
    {
      date: "Apr 2021",
      Total: 2780,
      Progress: 1908,
      Resolved: 872,
    },
    {
      date: "May 2021",
      Total: 1890,
      Progress: 400,
      Resolved: 1490,
    },
    {
      date: "June 2021",
      Total: 2390,
      Progress: 1800,
      Resolved: 590,
    },
    {
      date: "Jul 2021",
      Total: 3490,
      Progress: 300,
      Resolved: 3190,
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
    <Container className="container-fluid" style={{ marginTop: "20px" }}>
      <Flex className="d-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <div style={{ margin: "1rem" }} />
        {accountType !== ACCOUNT_TYPE.user ? (
          <div className="d-sm-inline-block">
            <select
              className="form-select"
              id="locationInput"
              aria-label="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              disabled={accountType === ACCOUNT_TYPE.manager}
            >
              <option value="">Select Location</option>
              <option value={LOCATIONS.bangaluru}>Bangaluru</option>
              <option value={LOCATIONS.delhi}>Delhi</option>
              <option value={LOCATIONS.mumbai}>Mumbai</option>
            </select>
          </div>
        ) : null}
      </Flex>
      <div className="row">
        <IssueStatus
          {...{
            location: accountType === ACCOUNT_TYPE.user ? null : location,
            userId: accountType === ACCOUNT_TYPE.user ? userId : null,
          }}
        />
        <div className="row">
          <div className="col-xl-6  mb-4">
            {/*<div className="mb-3">*/}
            {/*  /!* <label htmlFor="locationInput" className="form-label">*/}
            {/*    Location**/}
            {/*  </label> *!/*/}
            {/*  <select*/}
            {/*    className="form-select"*/}
            {/*    id="locationInput"*/}
            {/*    aria-label="location"*/}
            {/*    value={location}*/}
            {/*    onChange={(e) => setLocation(e.target.value)}*/}
            {/*  >*/}
            {/*    <option value="">Select Location</option>*/}
            {/*    <option value={LOCATIONS.bangaluru}>Bangaluru</option>*/}
            {/*    <option value={LOCATIONS.delhi}>Delhi</option>*/}
            {/*    <option value={LOCATIONS.mumbai}>Mumbai</option>*/}
            {/*  </select>*/}
            {/*</div>*/}
            {/*<IssueStatus />*/}
            {/* Reference https://palerdot.in/react-d3-speedometer/?path=/story/reactspeedometer--default-with-no-config */}
            <div className="card mb-4 h-100">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-dark">
                  City happiness level
                </h6>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <ReactSpeedometer
                    minValue={0}
                    maxValue={100}
                    value={78}
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
                  Based on grievances resolved your city is categorized “Good”.
                  We are constantly upgrading our facilities to give you a
                  better experience!
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6  mb-4">
            <div className="card text-center" style={{ height: "400px" }}>
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-dark">
                  Monthly overview
                </h6>
              </div>
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
                      dataKey="Total"
                      stroke="#607d8b"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="Progress" stroke="#ff9800" />
                    <Line type="monotone" dataKey="Resolved" stroke="#4caf50" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-12 mb-4">
          <div className="card" style={{ height: "400px", width: "100%" }}>
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-dark">
                Annual comparison of issues based on issue types
              </h6>
            </div>
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
