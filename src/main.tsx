import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {Track} from "./components/Request/Request";

interface Props {
  tracks:Track[];
}

const tracks: Track[] = [
/*   {
    "id": 8,
    "name": "Chase",
    "author": "Alexander Nakarada",
    "release_date": "2005-06-11",
    "genre": "Классическая музыка",
    "duration_in_seconds": 205,
    "album": "Chase",
    "logo": null,
    "track_file": "https://painassasin.online/media/music_files/Alexander_Nakarada_-_Chase.mp3"
  }, */

  // Здесь вы можете определить массив треков
];


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App tracks={tracks} />
    </BrowserRouter>
  </React.StrictMode>
);
