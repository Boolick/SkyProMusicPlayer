import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../Store/store";
//import handleToken from "./token";

interface PrivateRouteProps {
  isAuthenticatedProp: boolean;
  redirectPath: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticatedProp,
  redirectPath,
}) => {
  const email = useSelector((state: RootState) => state.auth.email);
  const password = useSelector((state: RootState) => state.auth.password); 
  
  const token =   useSelector((state: RootState) => state.auth.token);
  console.log(token);
  const isAuthenticated = !!token;
  console.log("Rendering PrivateRoute with isAuthenticated =", isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default PrivateRoute;
function setError(message: any) {
  throw new Error("Function not implemented.");
}
