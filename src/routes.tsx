import { Routes, Route, useParams } from "react-router-dom";

import Main from "./screens/Main";
import LoginPage from "./screens/LoginPage/LoginPage";
import NotFound from "./screens/NotFoundPage/NotFound";
import { Track } from "./components/Request/Request";
import PrivateRoute from "./components/PrivateRoute";
import SelectionsPage from "./screens/SelectionsPage";
import MyPlaylist from "./screens/Myplaylist";
import SignupPage from "./screens/LoginPage/AuthPage";

interface AppRoutesProps {
  tracks: Track[];
  isAuthenticated: boolean;
  path: string;
  element: React.ReactNode;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ tracks, isAuthenticated }) => {
  return (
    <>
      <Routes>
        <Route path="/auth-page" element={<SignupPage />}></Route>
        <Route
          element={
            <PrivateRoute
              isAuthenticatedProp={isAuthenticated}
              redirectPath={"/login-page"}
            />
          }
        >
          <Route index element={<Main tracks={tracks} />}></Route>
          <Route
            path="/selections-page/:id"
            element={<SelectionsPageWrapper />}
          ></Route>

          <Route
            path="/my-playlist"
            element={<MyPlaylist tracks={tracks} />}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/login-page" element={<LoginPage />}></Route>
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
