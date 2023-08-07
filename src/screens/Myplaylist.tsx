import React from "react";

import Playlist from "../components/Playlist";
import Bar from "../components/Bar";
import { Track } from "../components/Request/Request";

interface MyPlaylistProps {
  tracks: Track[];
}

const MyPlaylist: React.FC<MyPlaylistProps> = ({ tracks }) => {
  return (
    <>
      <h1>My playlist</h1>

      <Playlist tracks={tracks} />

      <Bar loading={false} />
    </>
  );
};

export default MyPlaylist;
