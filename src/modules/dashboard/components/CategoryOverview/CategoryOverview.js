/** @format */

import React from "react";
import PropTypes from "prop-types";
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

import Card from "../../../../common/components/Cards/Card";
import CardHeader from "../../../../common/components/Cards/CardHeader";
import { Heading } from "../../../../common/components/Typography/Typography";
import CardBody from "../../../../common/components/Cards/CardBody";

const MonthlyOverview = ({ userId, location }) => {
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
    <Card shadow className="" style={{ height: "400px", width: "100%" }}>
      <CardHeader className="py-3 d-flex flex-row align-items-center justify-content-between">
        <Heading size={6} className="m-0 font-weight-bold text-dark">
          Annual comparison of issues based on issue types
        </Heading>
      </CardHeader>
      <CardBody className="">
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
      </CardBody>
    </Card>
  );
};

MonthlyOverview.propTypes = {
  userId: PropTypes.string,
  location: PropTypes.string,
};

// MonthlyOverview.defaultProps = {
// };

export default MonthlyOverview;
