import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {Track} from "./components/Request/Request";

interface Props {
  tracks:Track[];
}

const tracks: Track[]= [];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App tracks={tracks} />
    </BrowserRouter>
  </React.StrictMode>
);
