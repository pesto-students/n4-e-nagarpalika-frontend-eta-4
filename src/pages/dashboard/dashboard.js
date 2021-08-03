/** @format */

/* eslint-disable no-unused-vars */

import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
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
import CityHappinessLevel from "../../modules/dashboard/components/CityHappinessLevel";
import IssueDistributionGraph from "../../common/components/Charts/IssueDistribution";

import { Container, Flex } from "./styles";

function Dashboard() {
  const reduxState = useSelector((state) => state);
  const { account } = reduxState;
  const { id: userId, accountType, location: userLocation } = account;

  const [location, setLocation] = useState(userLocation);
  // const history = useHistory();

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
        <div className="d-sm-inline-block">
          <select
            className="form-select"
            id="locationInput"
            aria-label="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            disabled={accountType !== ACCOUNT_TYPE.admin}
          >
            <option value="">Select Location</option>
            <option value={LOCATIONS.bangaluru}>Bangaluru</option>
            <option value={LOCATIONS.delhi}>Delhi</option>
            <option value={LOCATIONS.mumbai}>Mumbai</option>
          </select>
        </div>
      </Flex>
      <div className="row">
        <IssueStatus
          {...{
            location: location,
            userId: accountType === ACCOUNT_TYPE.user ? userId : null,
          }}
        />
        <div className="row">
          <div className="col-xl-6  mb-4">
            <CityHappinessLevel location={userLocation} />
          </div>
          <div className="col-xl-6 mb-4">
            <div className="card text-center" style={{ height: "400px" }}>
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-dark">
                  Monthly overview
                </h6>
              </div>
              <div className="card-body">
                <IssueDistributionGraph {...{ userId, location }} />
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
