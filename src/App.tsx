import { useState } from "react";
import "./css/style.css";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
