import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../Store/store";
import { useTokenMutation } from "../Store/Reducers/apiSlice";
import { setToken } from "../Store/Reducers/AuthSlice";

interface PrivateRouteProps {
  isAuthenticatedProp: boolean;
  redirectPath: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticatedProp,
  redirectPath,
}) => {
  const dispatch = useDispatch();
  const [getToken] = useTokenMutation();
  const email = useSelector((state: RootState) => state.auth.email);
  const password = useSelector((state: RootState) => state.auth.password);

  const handleGetToken = async (email: string, password: string) => {
    try {
      const response = await getToken({ email, password });

      if ("data" in response) {
        console.log("Before dispatching setToken:", token);
        dispatch(setToken(response.data.access));
        console.log("After dispatching setToken:", token);
      } else {
        prompt("Ошибка");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };
  useEffect(() => {
    handleGetToken(email, password);
  }, []);

  const token = useSelector((state: RootState) => state.auth.token);
  const isAuthenticated = !!token;

  console.log("Rendering PrivateRoute with isAuthenticated =", isAuthenticated);
  console.log(isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default PrivateRoute;
function setError(message: any) {
  throw new Error("Function not implemented.");
}
