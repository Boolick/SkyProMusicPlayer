import { Routes, Route } from "react-router-dom";
import Main from "./screens/Main";
import Myplaylist from "./screens/Myplaylist";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/Myplaylist" element={<Myplaylist />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default AppRoutes;
