/** @format */

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import useAuth from "../../modules/auth/authContext";

function Dashboard() {
  // const { logout } = useAuth();
  const history = useHistory();

  const fetchData = async () => {
    const res = await axios.get("http://localhost:7001/");
    return res;
  };
  useEffect(() => {
    fetchData().then((res) => {
      console.log(res);
    });
  }, []);
  async function handleLogout() {
    try {
      // await logout();
      history.push("/");
    } catch {
      console.log("Failed to log out");
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <div>Dashboard</div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        onClick={handleLogout}
        style={{
          height: "40px",
          width: "100px",
          alignItems: "flex",
        }}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Dashboard;
