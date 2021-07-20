/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import About from "../../pages/about";
// import Error from "../../pages/error";
import NotFound from "../../pages/not-found";
import Account from "../../pages/account/account";
import ContactUs from "../../pages/contact-us/contact-us";
import Dashboard from "../../pages/dashboard/dashboard";
import Grievance from "../../pages/grievance/grievance";
import Grievances from "../../pages/grievances/grievances";
import LandingPage from "../../pages/landingPage/landingPage";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import Settings from "../../pages/settings/settings";
import AdminActions from "../../pages/admin-action/adminAction";

const PublicRoutes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/about" exact component={About} />
    <Route path="/login" exact component={Login} />
    <Route path="/contact-us" exact component={ContactUs} />

    <Route component={NotFound} />
  </Switch>
);

const PrivateRoutes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/about" exact component={About} />
    <Route path="/login" exact component={Login} />
    <Route path="/contact-us" exact component={ContactUs} />

    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/account" exact component={Account} />
    <Route path="/contact-us" exact component={ContactUs} />
    <Route path="/grievance" exact component={Grievance} />
    <Route path="/grievances" exact component={Grievances} />
    <Route path="/settings" exact component={Settings} />

    <Route component={NotFound} />
  </Switch>
);

const AdminRoutes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/about" exact component={About} />
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />

    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/account" exact component={Account} />
    <Route path="/contact-us" exact component={ContactUs} />
    <Route path="/grievance" exact component={Grievance} />
    <Route path="/grievances" exact component={Grievances} />
    <Route path="/settings" exact component={Settings} />

    <Route path="/admin-action" exact component={AdminActions} />

    <Route component={NotFound} />
  </Switch>
);

function AppRoutes() {
  const account = useSelector((state) => state.account);

  const { isLoggedIn, accountType } = account;

  if (!isLoggedIn) {
    return <PublicRoutes />;
  }

  if (accountType === "USER") {
    return <PrivateRoutes />;
  }

  return <AdminRoutes />;
}

export default AppRoutes;
