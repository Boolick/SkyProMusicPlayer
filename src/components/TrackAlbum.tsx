import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { RootState } from "../Store/store";
import { useGetAllTracksQuery } from "../components/trackApi";
import styles from "./Item/Item.module.css";
import { addTrack, removeTrack } from "../Store/Reducers/favoriteSlice";

function TrackAlbum() {
  const { data, error, isLoading } = useGetAllTracksQuery();
  const dispatch = useDispatch();
  const favoriteTracks = useSelector(
    (state: RootState) => state.favorite.tracks
  );

  if (isLoading)
    return (
      <div>
        <div>
          <Skeleton
            count={29}
            baseColor="var(--color-img)"
            highlightColor="var(--color-background)"
          ></Skeleton>
        </div>
      </div>
    );

  if (error) return <div>Error:{error.toString()}</div>;

  return (
    <ul className={styles.playlist}>
      {data?.map((track) => (
        <li key={track.id} className={styles.playlist__item}>
          {isLoading ? (
            <Skeleton />
          ) : (
            <div className={styles.track__title_image}>
              <svg className={styles.track__title_svg}>
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
          )}

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
              onClick={() =>
                favoriteTracks.some((t) => t.id === track.id)
                  ? dispatch(removeTrack(track.id))
                  : dispatch(addTrack(track))
              }
              className={cn(styles.track__heart, {
                [styles.track__heart_favorite]: favoriteTracks.some(
                  (t) => t.id === track.id
                ),
              })}
            >
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
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

export default TrackAlbum;
