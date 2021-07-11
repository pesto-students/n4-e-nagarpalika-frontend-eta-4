/** @format */

import React from "react";
import PropTypes from "prop-types";

import { LineChart, Line, XAxis, YAxis } from "recharts";

import {
  ChartBoxContainer,
  ChartBoxTitleContainer,
  ChartBoxTitle,
  ChartBoxSubTitle,
  ChartBoxDescription,
} from "./styles";

const ChartBox = ({ width }) => {
  const data = [
    { name: "Jun 21", uv: 400, pv: 2400, amt: 2400 },
    { name: "Jul 21", uv: 200, pv: 2400, amt: 2400 },
    { name: "Aug 21", uv: 700, pv: 2400, amt: 2400 },
    { name: "Sept 21", uv: 90, pv: 2400, amt: 2400 },
    { name: "Oct 21", uv: 800, pv: 2400, amt: 2400 },
  ];

  return (
    <ChartBoxContainer>
      <ChartBoxTitleContainer>
        <ChartBoxTitle>5,897</ChartBoxTitle>
        <ChartBoxSubTitle>Complaint Filed</ChartBoxSubTitle>
      </ChartBoxTitleContainer>
      <LineChart width={width} height={width} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis width={30} />
      </LineChart>
      <ChartBoxDescription>
        With 5000+ issues logged so far, we aim to help help 100000+ citizen by
        the end of this year.
      </ChartBoxDescription>
    </ChartBoxContainer>
  );
};

ChartBox.propTypes = {
  width: PropTypes.number.isRequired,
};

export default ChartBox;
