import { useState, useEffect } from "react";
import "./css/style.css";
import AppRoutes from "./routes";
import { Track } from "./components/Request/Request";
import Skeletones from "./screens/Skeletones";

interface AppProps {
  tracks: Track[];
}

const App: React.FC<AppProps> = ({ tracks }) => {

  return (
    <div className="wrapper">
     
      <div className="container">
        <AppRoutes tracks={tracks} />
      </div>
    </div>
  );
};

export default App;
