/** @format */

import React, { useEffect, useState } from "react";

import { getIssueStats } from "../../api";

const Section = ({ icon, count, title }) => (
  <div>
    <div className="icon">icon</div>
    <div className="icon">{count}</div>
    <div className="icon">{title}</div>
  </div>
);

const IssueStatus = () => {
  const [stats, setStats] = useState({
    total: 0,
    resolved: 0,
    progress: 0,
  });

  useEffect(() => {
    async function getStats() {
      const { status, data } = await getIssueStats();

      if (status === "Success") {
        setStats(data);
      }
    }

    getStats();
  }, []);
  return (
    <div className="card">
      <div className="card-body d-flex flex-row justify-content-around">
        <Section icon="" count={stats.total} title="Total" />
        <Section icon="" count={stats.progress} title="Total" />
        <Section icon="" count={stats.resolved} title="Total" />
      </div>
    </div>
  );
};

export default IssueStatus;
