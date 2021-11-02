import React from "react";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RoutesEnum from "./shared/RoutesEnum";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ForgotPasswordEmailSentPage from "./pages/ForgotPasswordEmailSentPage";
import "./styles/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import ProfilePage from "./pages/ProfilePage";
import "antd/dist/antd.css";
import NewsArticlePage from "./pages/NewsArticlePage";
import IncidentsPage from "./pages/IncidentsPage";
import NewIncidentPage from "./pages/NewIncidentPage";

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
      <Route exact path={RoutesEnum.HOME} component={HomePage} />
      <Route exact path={RoutesEnum.NEWS} component={NewsPage} />
      <Route exact path={RoutesEnum.NEWS_ARTICLE} component={NewsArticlePage} />
      <Route exact path={RoutesEnum.PROFILE} component={ProfilePage} />
      <Route exact path={RoutesEnum.INCIDENTS} component={IncidentsPage} />
      <Route
        exact
        path={RoutesEnum.INCIDENTS_NEW}
        component={NewIncidentPage}
      />
    </Router>
  );
}

export default App;
