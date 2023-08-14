import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../Store/store";

interface PrivateRouteProps {
  isAuthenticatedProp: boolean;
  redirectPath: string;
}

const PrivateRoute = ({
  isAuthenticatedProp,
  redirectPath,
}: PrivateRouteProps) => {
  const email = useSelector((state: RootState) => state.auth.email);
  const password = useSelector((state: RootState) => state.auth.password);

  const token = useSelector((state: RootState) => state.auth.token);
  console.log(token);
  const isAuthenticated = !!token;
  console.log("Rendering PrivateRoute with isAuthenticated =", isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default PrivateRoute;
