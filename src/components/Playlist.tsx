import React from "react";
import TrackTime from "./TrackTime";
import TrackAlbum from "./TrackAlbum";

/* import TrackList, { Track } from "./Request/Request"; */

/* interface PlaylistProps {
  tracks: Track[];
} */

const Playlist: React.FC /* <PlaylistProps> */ = () => {
  return (
    <div className="content__playlist playlist">
      <TrackAlbum></TrackAlbum>
    </div>
  );
};

export default Playlist;
