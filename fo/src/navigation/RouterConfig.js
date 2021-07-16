import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Login from "../pages/auth/login";
import ForgotPassword from "../pages/auth/forgotpassword";
import ResetPasswordRequest from "../pages/auth/resetrequest";
import ResetPassword from "../pages/auth/resetpassword";
import Dashboard from "../pages/dashboard";
import {
  LOGIN,
  FORGOTPASSWORD,
  RESETPASSWORDREQUEST,
  RESETPASSWORD,
  DASHBOARD,
} from "./CONSTANT";

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout exact path={DASHBOARD} component={Dashboard} />
        <Layout exact path={LOGIN} component={Login} />
        <Layout exact path={FORGOTPASSWORD} component={ForgotPassword} />
        <Layout
          exact
          path={RESETPASSWORDREQUEST}
          component={ResetPasswordRequest}
        />
        <Layout exact path={RESETPASSWORD} component={ResetPassword} />
      </Switch>
    </BrowserRouter>
  );
};
