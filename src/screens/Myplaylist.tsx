import React from "react";
import Item from "../components/Item";
import Playlist from "../components/Playlist";
import Bar from "../components/Bar";
import TracksList, { Track } from "../components/Request/Request";

interface MyPlaylistProps {
  tracks: Track[];
}

const MyPlaylist: React.FC<MyPlaylistProps> = ({ tracks }) => {
  return (
    <>
      <h1>My playlist</h1>

      <Playlist tracks={tracks} />

      <Bar />
    </>
  );
};

export default MyPlaylist;
