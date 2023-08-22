import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setResetFilters,
  setSelectedAuthor,
} from "../../Store/Reducers/filtersSlice";
import styles from "./TrackAuthor.module.css";
import { RootState } from "../../Store/store";

const TrackAuthor: React.FC = () => {
  const dispatch = useDispatch();
  const tracks = useSelector((state: RootState) => state.player.tracks);

  const handleAuthorClick = (author: string) => {
    dispatch(setResetFilters());
    dispatch(setSelectedAuthor(author));
  };

  return (
    <div className={styles.list}>
      {tracks.map((track) => (
        <div
          key={track.id}
          className={styles.track__title_link}
          onClick={() => handleAuthorClick(track.author)}
        >
          <span className={styles.track__title_span}>{track.author}</span>
        </div>
      ))}
    </div>
  );
};

export default TrackAuthor;
