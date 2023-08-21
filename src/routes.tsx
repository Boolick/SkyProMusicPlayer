import { Routes, Route, useParams } from "react-router-dom";

import Main from "./screens/Main";
import LoginPage from "./screens/LoginPage/LoginPage";
import NotFound from "./screens/NotFoundPage/NotFound";

import PrivateRoute from "./components/PrivateRoute";
import SelectionsPage from "./screens/SelectionsPage";
import MyPlaylist from "./screens/Myplaylist";
import SignupPage from "./screens/LoginPage/AuthPage";

interface AppRoutesProps {
  isAuthenticated: boolean;
  path: string;
  element: React.ReactNode;
}

const AppRoutes = ({ isAuthenticated }: AppRoutesProps) => {
  return (
    <>
      <Routes>
        <Route path="/auth-page" element={<SignupPage />}></Route>
        <Route path="/login-page" element={<LoginPage />}></Route>
        <Route
          element={
            <PrivateRoute
              isAuthenticatedProp={isAuthenticated}
              redirectPath={"/login-page"}
            />
          }
        >
          <Route index element={<Main />}></Route>
          <Route
            path="/selections-page/:id"
            element={<SelectionsPageWrapper />}
          ></Route>

          <Route path="/my-playlist" element={<MyPlaylist />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

// функция оболочка для SelectionPage, чтобы не вводить параметр selectionId напрямую в routes
function SelectionsPageWrapper() {
  const { id } = useParams();
  return <SelectionsPage selectionId={Number(id)} />;
}
export default AppRoutes;
