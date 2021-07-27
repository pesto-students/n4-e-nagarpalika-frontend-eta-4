/** @format */

import React, { useEffect, useState } from "react";

import { getIssueStats } from "../../api";

// const Section = ({ icon, count, title }) => (
//   <div>
//     <div className="icon">icon</div>
//     <div className="icon">{count}</div>
//     <div className="icon">{title}</div>
//   </div>
// );

const IssueStatus = () => {
  const [stats, setStats] = useState({
    total: 82,
    resolved: 64,
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
    <div className="row">
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                  Total Issues Logged
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {stats.total}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-exclamation-triangle fa-2x text-danger" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                  Pending Requests
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {stats.progress}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-exclamation-circle fa-2x text-warning" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                  Issues Resolved
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {stats.resolved}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-clipboard-check fa-2x text-success" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-info shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                  Progress
                </div>
                <div className="row no-gutters align-items-center">
                  <div className="col-auto">
                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                      {Math.trunc((stats.resolved / stats.total) * 100)}%
                    </div>
                  </div>
                  <div className="col">
                    <div className="progress progress-sm mr-2">
                      <div
                        id="progressbar"
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{
                          width: `${Math.trunc(
                            (stats.resolved / stats.total) * 100
                          )}%`,
                        }}
                        aria-label="Issue Resolution bar"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-clipboard-list fa-2x text-info" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueStatus;
