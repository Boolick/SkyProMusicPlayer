import React from "react";

import "../css/style.css";
import Burger from "../components/BurgerMenu/Burger";
import Bar from "../components/Bar";
import { Track } from "../components/Request/Request";

import Search from "../components/Search/Search";
import FavoriteTracks from "../components/FavoriteTracks";

interface MyPlaylistProps {
  tracks: Track[];
}

const MyPlaylist: React.FC<MyPlaylistProps> = ({ tracks }) => {
  return (
    <>
      <Burger />
      <div className="main__centerblock centerblock">
        <Search />
        <h2 className="centerblock__h2">Мой плейлист</h2>
        <FavoriteTracks />
      </div>
      <Bar />
    </>
  );
};

export default MyPlaylist;
