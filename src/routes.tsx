import { Routes, Route } from "react-router-dom";

import Main from "./screens/Main";
import MyPlaylist from "./screens/MyPlaylist";
import LoginPage from "./screens/LoginPage/LoginPage";
import NotFound from "./screens/NotFoundPage/NotFound";
import { Track } from "./components/Request/Request";

interface AppRoutesProps {
  tracks: Track[];
  isAuthenticated: boolean;
  path: string;
  element: React.ReactNode;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ tracks }) => {
  return (
    <Routes>
      <Route index element={<Main tracks={tracks} />}></Route>
      <Route path="/MyPaylist" element={<MyPlaylist tracks={tracks} />}></Route>
      <Route path="/LoginPage" element={<LoginPage type={"login"} />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
