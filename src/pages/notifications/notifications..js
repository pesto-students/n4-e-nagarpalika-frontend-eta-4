/** @format */

import React, { useEffect, useState } from "react";
import { useSelector, connect } from "react-redux";

import NotificationCard from "../../common/components/Notifications/Card";
import { FETCH_STATUS } from "../../common/contants";
import { getNotifications } from "../../modules/notifications/actionCreators";
import { getNotificationCount as apiGetNotificationCount } from "../../modules/notifications/api";

const Notifications = ({ actionGetNotifications }) => {
  const [account, notificationStore] = useSelector(
    ({ account, notifications }) => [account, notifications]
  );
  const { id: userId } = account;
  const { fetchStatus, error, list: notifications } = notificationStore;

  const [total, setTotal] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(25);

  // This is for fetching notification counts for pagination
  useEffect(() => {
    async function get() {
      const { data } = await apiGetNotificationCount({ userId });
      const { count: total } = data;

      setTotal(total);
    }

    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // this is for fetching first 25 notifications for user.
  useEffect(() => {
    actionGetNotifications({ userId, page, limit });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, page, limit]);

  return (
    <div className="container">
      {/* <div> */}
      <h1 className="h4 text-gray-900 mb-4">Notifications Center</h1>
      {/* </div> */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </symbol>
      </svg>

      <div className="row row-cols-1 row-cols-md-1 g-4">
        {notifications.length === 0 ? (
          <div
            className="alert alert-light"
            role="alert"
            style={{ border: "1px solid grey" }}
          >
            No notification found
          </div>
        ) : null}
        {notifications.map((notif) => {
          return <NotificationCard key={notif.id} {...{ ...notif }} />;
        })}
        {error && <div>{error}</div>}
        {fetchStatus === FETCH_STATUS.loading && <div>loading...</div>}
      </div>
    </div>
  );
};

// export default Notifications;
const mapDispatchToProps = {
  actionGetNotifications: getNotifications,
};

export default connect(null, mapDispatchToProps)(Notifications);
