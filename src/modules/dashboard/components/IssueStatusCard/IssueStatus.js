/** @format */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Row from "../../../../common/components/Layout/Row";
import Col from "../../../../common/components/Layout/Col";

import StatusCard from "./StatusCard";
import ProgressCard from "./ProgressCard";

import { getIssueStats } from "../../api";
import { LOCATIONS } from "../../../../common/contants";

const IssueStatus = ({ userId, location }) => {
  const [stats, setStats] = useState({
    total: 0,
    resolved: 0,
    progress: 0,
  });

  useEffect(() => {
    const abortController = new AbortController();

    async function getStats() {
      let params = {};
      if (typeof userId !== "undefined") {
        params = { ...params, userId };
      }

      if (typeof location !== "undefined" && location.length > 0) {
        params = { ...params, location };
      }

      const { status, data } = await getIssueStats(params);

      if (status === "Success") {
        setStats(data);
      }
    }

    getStats();

    return () => {
      abortController.abort();
    };
  }, [userId, location]);

  const { total, resolved, progress } = stats;
  const progressPercent =
    total !== 0 ? Math.trunc((resolved / total) * 100) : 0;

  return (
    <Row className="">
      <Col md={6} xl={3} className="mb-4">
        <StatusCard
          {...{
            title: "Total Grievances",
            count: total,
            logo: "exclamation-triangle",
            bgColor: "danger",
          }}
        />
      </Col>
      <Col md={6} xl={3} className="mb-4">
        <StatusCard
          {...{
            title: "Pending Grievances",
            count: progress,
            logo: "exclamation-circle",
            bgColor: "warning",
          }}
        />
      </Col>
      <Col md={6} xl={3} className="mb-4">
        <StatusCard
          {...{
            title: "Resolved Grievances",
            count: resolved,
            logo: "clipboard-check",
            bgColor: "success",
          }}
        />
      </Col>
      <Col md={6} xl={3} className="mb-4">
        <ProgressCard progressPercent={progressPercent} />
      </Col>
    </Row>
  );
};

IssueStatus.propTypes = {
  userId: PropTypes.string,
  location: PropTypes.oneOf(Object.values(LOCATIONS)),
};

export default IssueStatus;
