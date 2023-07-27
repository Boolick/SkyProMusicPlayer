import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../Store/store";

interface PrivateRouteProps {
  isAuthenticatedProp: boolean;
  redirectPath: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticatedProp,
  redirectPath,
}) => {
  const isAuthenticated = useSelector((state: RootState) => !!state.auth.token);
  console.log(isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} />;
  
};


export default PrivateRoute;
