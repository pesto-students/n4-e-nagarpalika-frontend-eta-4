/** @format */

import React, { useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { ACCOUNT_TYPE } from "../contants";

import About from "../../pages/about";
// import Error from "../../pages/error";
import NotFound from "../../pages/not-found";
import Account from "../../pages/account/account";
import Notifications from "../../pages/notifications/notifications.";
import ContactUs from "../../pages/contact-us/contact-us";
import Dashboard from "../../pages/dashboard/dashboard";
import Grievance from "../../pages/grievance/grievance";
import GrievanceNew from "../../pages/grievanceNew/grievanceNew";
import Grievances from "../../pages/grievances/grievances";
// import LandingPage from "../../pages/landingPage/landingPage";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import Settings from "../../pages/settings/settings";
import AdminActions from "../../pages/admin-action/adminAction";
import LandingPageNew from "../../pages/landingPage/landingPageNew";

const PublicRoutes = () => (
  <Switch>
    {/*<Route exact path="/" component={LandingPage} />*/}
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/contact-us" component={ContactUs} />
    <Route exact path="/" component={LandingPageNew} />
    <Route component={NotFound} />
  </Switch>
);

const PrivateRoutes = ({ account }) => {
  const history = useHistory();

  useEffect(() => {
    const { status, isLoggedIn, isFirstTime } = account;

    if (status === "SUCCESS" && isLoggedIn && isFirstTime) {
      history.push("/register");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  return (
    <Switch>
      <Route exact path="/" component={LandingPageNew} />
      {/*<Route exact path="/about" component={About} />*/}
      <Route exact path="/contact-us" component={ContactUs} />

      <Route exact path="/register" component={Register} />
      <Route exact path="/notifications" component={Notifications} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/account" component={Account} />
      <Route exact path="/contact-us" component={ContactUs} />
      <Route exact path="/grievances/new" component={GrievanceNew} />
      <Route exact path="/grievances/:id" component={Grievance} />
      <Route exact path="/grievances" component={Grievances} />
      <Route exact path="/settings" component={Settings} />

      <Redirect from="/" to="/dashboard" />

      <Route component={NotFound} />
    </Switch>
  );
};

const AdminRoutes = () => (
  <Switch>
    <Route exact path="/" component={LandingPageNew} />

    <Redirect from="/login" to="/dashboard" />
    <Redirect from="/register" to="/dashboard" />

    <Route exact path="/about" component={About} />
    <Route exact path="/notifications" component={Notifications} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/account" component={Account} />
    <Route exact path="/contact-us" component={ContactUs} />
    <Route exact path="/grievances/new" component={GrievanceNew} />
    <Route exact path="/grievances/:id" component={Grievance} />
    <Route exact path="/grievances" component={Grievances} />
    <Route exact path="/settings" component={Settings} />

    <Route exact path="/admin-action" component={AdminActions} />

    <Route component={NotFound} />
  </Switch>
);

function AppRoutes() {
  const account = useSelector((state) => state.account);

  const { isInit, isLoggedIn, accountType } = account;

  if (!isInit) {
    return <div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: "auto", background:" rgb(241, 242, 243)", display: "block", shapeRendering: "auto"}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <rect x="17.5" y="30" width="15" height="40" fill="#93dbe9">
                <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="18;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"/>
                <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="64;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"/>
            </rect>
            <rect x="42.5" y="30" width="15" height="40" fill="#689cc5">
                <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"/>
                <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"/>
            </rect>
            <rect x="67.5" y="30" width="15" height="40" fill="#5e6fa3">
                <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"/>
                <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"/>
            </rect>
        </svg>
        </div>;
  }

  if (!isLoggedIn) {
    return <PublicRoutes />;
  }

  if (accountType === ACCOUNT_TYPE.user) {
    return <PrivateRoutes account={account} />;
  }

  return <AdminRoutes />;
}

export default AppRoutes;
