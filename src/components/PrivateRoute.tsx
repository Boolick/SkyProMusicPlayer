import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  isAuthenticated?: boolean;
  redirectPath: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated = true,
  redirectPath,
}) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default PrivateRoute;
