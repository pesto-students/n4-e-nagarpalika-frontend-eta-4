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
    total: 16,
    resolved: 3,
    progress: 13,
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
        <Section icon="" count={stats.progress} title="Pending" />
        <Section icon="" count={stats.resolved} title="Resolved" />
      </div>
    </div>
  );
};

export default IssueStatus;
