import React, { useEffect, useState } from "react";

import styles from "./Genres.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { setSelectedGenre } from "../../Store/Reducers/filtersSlice";

const Genres: React.FC = () => {
  const dispatch = useDispatch();
  const tracks = useSelector((state: RootState) => state.player.tracks);

  // создаем  массив с уникальными жанрами
  const genresTracks = tracks.map((track) => track.genre);
  const newTracks = [...new Set(genresTracks)];

  const handleGenreClick = (genre: string) => {
    dispatch(setSelectedGenre(genre));
  };

  return (
    <div className={styles.list}>
      {newTracks.map((track) => (
        <div
          key={track}
          className={styles.track__genre_link}
          onClick={() => handleGenreClick(track)}
        >
          <span className={styles.track__genre_span}>{track}</span>
        </div>
      ))}
    </div>
  );
};

export default Genres;
