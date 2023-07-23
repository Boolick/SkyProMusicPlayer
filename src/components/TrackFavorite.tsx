import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Item/Item.module.css";
import { RootState } from "../Store/store";
import { removeTrack } from "../Store/Reducers/favoriteSlice";

function FavoriteTracks() {
  const favoriteTracks = useSelector(
    (state: RootState) => state.favorite.tracks
  );

  const dispatch = useDispatch();

  return (
    <ul className={styles.playlist}>
      {favoriteTracks.map((track) => (
        <li key={track.id} className={styles.playlist__item}>
          <div className={styles.track__title_image}>
            <svg className={styles.track__title_svg}>
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>

          <div className={styles.track__title_text}>
            <a className={styles.track__title_link} href="http://">
              {track.name}
            </a>
          </div>
          <div className={styles.track__author}>
            <a className={styles.track__author_link} href="http://">
              {track.author}
            </a>
          </div>
          <div className={styles.track__album}>
            <a className={styles.track__album_link} href="http://">
              {track.album}
            </a>
          </div>
          <div className={styles.track__time}>
            <svg
              onClick={() => dispatch(removeTrack(track.id))}
              className={styles.track__heart}
            >
              <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
            </svg>
            <span className={styles.track__time_text}>
              {track.duration_in_seconds}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoriteTracks;
