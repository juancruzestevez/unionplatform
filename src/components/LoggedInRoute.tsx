import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import RoutesEnum from "../shared/RoutesEnum";

const AuthenticatedRoute = (params: RouteProps) => {
  if (!localStorage.getItem("token")) {
    return <Redirect to={RoutesEnum.LOGIN} />;
  }

  return <Route {...params} />;
};

export default AuthenticatedRoute;
