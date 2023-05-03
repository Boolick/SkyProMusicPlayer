import React, { useEffect, useState } from "react";
import { Track } from "../Request/Request";
import styles from "./Genres.module.css";

const Genres: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  useEffect(() => {
    fetch("https://painassasin.online/catalog/track/all/")
      .then((response) => response.json())
      .then((data) => setTracks(data));
  }, []);
  return (
    <div className={styles.list}>
      {tracks.map((track) => (
        <a key={track.id} className={styles.track__genre_link} href="http://">
          <span className={styles.track__genre_span}>{track.genre}</span>
        </a>
      ))}
    </div>
  );
};

export default Genres;
