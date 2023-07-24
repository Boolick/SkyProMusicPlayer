import React from "react";

import Playlist from "./Playlist";
import { Track } from "./Request/Request";

interface ContentProps {
  tracks: Track[];
}

const Content: React.FC<ContentProps> = ({ tracks }) => {
  return (
    <>
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <svg className="playlist-title__svg">
            <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>
      <Playlist />
    </>
  );
};

export default Content;
