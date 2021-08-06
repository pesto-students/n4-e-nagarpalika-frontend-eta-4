/** @format */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { getIssuesGraphByDate } from "../../../modules/dashboard/api";
import { LOCATIONS } from "../../contants";

const IssueDistributionGraph = ({ userId, location }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function get() {
      const res = await getIssuesGraphByDate({ userId, location });

      // console.log(res.data);

      const list = res.data.map(({ year, month, total, resolved }) => {
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

        return {
          date: `${months[month - 1]} ${year}`,
          Total: total,
          Progress: total - resolved,
          Resolved: resolved,
        };
      });

      setData(list);
    }

    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
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
  );
};

IssueDistributionGraph.propTypes = {
  userId: PropTypes.string,
  location: PropTypes.oneOf(Object.values(LOCATIONS)),
};

export default IssueDistributionGraph;
