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
  

  const token = useSelector((state: RootState) => state.auth.access);
  console.log(token);
  const isAuthenticated = !!token;
  console.log("Rendering PrivateRoute with isAuthenticated =", isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default PrivateRoute;
