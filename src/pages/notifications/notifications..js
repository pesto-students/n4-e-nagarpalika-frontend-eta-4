/** @format */

import React from "react";

import NotificationCard from "../../common/components/Notifications/Card";

const Notifications = () => {
  const notifications = [
    {
      id: "1",
      createdAt: new Date(2021, 6).toUTCString(),
      text: "Status changed for your grievance ‘Traffic Light not working Near HSR Layout’.",
      issueId: "60fc7eef126fe5023c98ecfc",
    },
    {
      id: "2",
      createdAt: new Date(2021, 6).toUTCString(),
      text: "Status changed for your grievance ‘Traffic Light not working Near HSR Layout’.",
      issueId: "60fc7eef126fe5023c98ecfc",
    },
    {
      id: "3",
      createdAt: new Date(2021, 6).toUTCString(),
      text: "Status changed for your grievance ‘Traffic Light not working Near HSR Layout’.",
      issueId: "60fc7eef126fe5023c98ecfc",
    },
    {
      id: "4",
      createdAt: new Date(2021, 6).toUTCString(),
      text: "Status changed for your grievance ‘Traffic Light not working Near HSR Layout’.",
      issueId: "60fc7eef126fe5023c98ecfc",
    },
    {
      id: "5",
      createdAt: new Date(2021, 6).toUTCString(),
      text: "Status changed for your grievance ‘Traffic Light not working Near HSR Layout’.",
      issueId: "60fc7eef126fe5023c98ecfc",
    },
  ];

  return (
    <div className="container">
      <div>
        <h1 className="h4 text-gray-900 mb-4">Notifications Center</h1>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </symbol>
      </svg>

      <div className="row row-cols-1 row-cols-md-1 g-4">
        {notifications.map((notif) => {
          return <NotificationCard key={notif.id} {...{ ...notif }} />;
        })}
      </div>
    </div>
  );
};

export default Notifications;
