/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../../pages/about";
import Account from "../../pages/account/account";
import ContactUs from "../../pages/contact-us/contact-us";
import Dashboard from "../../pages/dashboard/dashboard";
import Grievance from "../../pages/grievance/grievance";
import Grievances from "../../pages/grievances/grievances";
import LandingPage from "../../pages/landingPage/landingPage";
import Login from "../../pages/login/login";
// import PrivateRoute from "./utils/PrivateRoute";
import Register from "../../pages/register/register";
import Settings from "../../pages/settings/settings";

function AppRoutes() {
  return (
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
    </Switch>
  );
}

export default AppRoutes;
