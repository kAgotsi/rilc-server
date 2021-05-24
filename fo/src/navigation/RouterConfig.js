import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Login from "../pages/auth/login";
import ForgotPassword from "../pages/auth/forgotpassword";
import ResetPasswordRequest from "../pages/auth/resetrequest";
import ResetPassword from "../pages/auth/resetpassword";
import {
  LOGIN,
  FORGOTPASSWORD,
  RESETPASSWORDREQUEST,
  RESETPASSWORD,
} from "./CONSTANT";

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Switch>
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
