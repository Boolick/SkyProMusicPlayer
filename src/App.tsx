import { useState, useEffect } from "react";
import "./css/style.css";
import AppRoutes from "./routes";
import { Track } from "./components/Request/Request";

interface AppProps {
  tracks: Track[];
}

const App = ({ tracks }: AppProps) => {
  return (
    <div className="wrapper">
      <div className="container">
        <AppRoutes tracks={tracks} />
      </div>
    </div>
  );
};

export default App;
