import React from "react";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import RoutesEnum from "./shared/RoutesEnum";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ForgotPasswordEmailSentPage from "./pages/ForgotPasswordEmailSentPage";
import "./styles/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "antd/dist/antd.css";

function App() {
  return (
    <Router>
      <Route exact path={RoutesEnum.LOGIN} component={LoginPage} />
      <Route exact path={RoutesEnum.SIGNUP} component={SignUpPage} />
      <Route
        exact
        path={RoutesEnum.FORGOT_PASSWORD}
        component={ForgotPasswordPage}
      />
      <Route
        exact
        path={RoutesEnum.FORGOT_PASSWORD_EMAIL_SENT}
        component={ForgotPasswordEmailSentPage}
      />
    </Router>
  );
}

export default App;
