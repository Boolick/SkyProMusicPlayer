import React, { useState, useEffect } from "react";

import Item from "../Item/Item";

// Cвойства Track
export interface Track {
  id: number;
  name: string;
  author: string;
  release_date: string;
  genre: string;
  duration_in_seconds: number;
  album: string;
  logo: null;
  track_file: string;
}

const TracksList: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    fetch("https://painassasin.online/catalog/track/all/")
      .then((response) => response.json())
      .then((data) => {
        setTracks(data);
      });
  }, []);

  return (
    <div>
      <Item tracks={tracks} />
    </div>
  );
};

export default TracksList;
