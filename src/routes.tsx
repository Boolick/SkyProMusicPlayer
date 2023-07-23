import { Routes, Route, useParams } from "react-router-dom";

import Main from "./screens/Main";
import MyPlaylist from "./screens/MyPlaylist";
import LoginPage from "./screens/LoginPage/LoginPage";
import NotFound from "./screens/NotFoundPage/NotFound";
import { Track } from "./components/Request/Request";
import PrivateRoute from "./components/PrivateRoute";
import SelectionsPage from "./screens/SelectionsPage";

interface AppRoutesProps {
  tracks: Track[];
  isAuthenticated: boolean;
  path: string;
  element: React.ReactNode;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ tracks }) => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute redirectPath={"/login-page"} />}>
          <Route index element={<Main tracks={tracks} />}></Route>
          <Route
            path="/my-playlist"
            element={<MyPlaylist tracks={tracks} />}
          ></Route>
        </Route>
        <Route
          path="/login-page"
          element={<LoginPage type={"login"} />}
        ></Route>
        <Route
          path="/selections-page/:id"
          element={<SelectionsPageWrapper />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

function SelectionsPageWrapper() {
  const { id } = useParams();
  return <SelectionsPage selectionId={Number(id)} />;
}

export default AppRoutes;
