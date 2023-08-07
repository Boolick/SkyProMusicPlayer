import React, { useState, useEffect } from "react";
import styles from "./TrackAuthor.module.css";
import { Track } from "../Request/Request";

const TrackAuthor: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  useEffect(() => {
    fetch("https://painassasin.online/catalog/track/all/")
      .then((response) => response.json())
      .then((data) => setTracks(data));
  }, []);

  return (
    <div className={styles.list}>
      {tracks.map((track) => (
        <a key={track.id} className={styles.track__title_link} href="http://">
          <span className={styles.track__title_span}>{track.author}</span>
        </a>
      ))}
    </div>
  );
};

export default TrackAuthor;

