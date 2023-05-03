import React from "react";
import Item from "./Item";
import TrackList, { Track } from "./Request/Request";

interface PlaylistProps {
  tracks: Track[];
}

const Playlist: React.FC<PlaylistProps> = ({ tracks }) => {
  return (
    <div className="content__playlist playlist">
      <TrackList />
    </div>
  );
};

export default Playlist;
