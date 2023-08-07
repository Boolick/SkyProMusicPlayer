import { Routes, Route } from "react-router-dom";
import Main from "./screens/Main";
import MyPlaylist from "./screens/Myplaylist";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import { Track } from "./components/Request/Request";
import LoadingPage from "./screens/LoadingPage";

interface AppRoutesProps {
  tracks: Track[];
}

const AppRoutes = ({ tracks }: AppRoutesProps) => {
  return (
    <Routes>
      <Route
        path="/LoadingPage"
        element={<LoadingPage tracks={tracks} />}
      ></Route>
      <Route path="/" element={<Main tracks={tracks} />}></Route>
      <Route
        path="/Myplaylist"
        element={<MyPlaylist tracks={tracks} />}
      ></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
