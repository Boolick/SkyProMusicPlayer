import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

import styles from "./Item/Item.module.css";
import { useTrackPlayer } from "./PlayTrack";
import {
  Track,
  useGetFavoriteTrackByIdQuery,
  useDeleteFavoriteTrackByIdMutation,
} from "../components/trackApi";
import { RootState } from "../Store/store";
import { removeTrack } from "../Store/Reducers/favoriteSlice";
import { useEffect } from "react";
import { toggleIsPLaying, updateTracks } from "../Store/Actions/playerSlice";
import { selectFilteredTracks } from "../Store/Selectors/searchSelector";

function FavoriteTrack({ track }: { track: Track }) {
  const { data, error, isLoading } = useGetFavoriteTrackByIdQuery(track.id);
  const dispatch = useDispatch();
  const { handleSelectTrack } = useTrackPlayer();
  const token = useSelector((state: RootState) => state.auth.token);

  const [deleteFavoriteTrack] = useDeleteFavoriteTrackByIdMutation();

  const handleDelete = (id: number, token: string) => {
    deleteFavoriteTrack({ id, token });
    dispatch(removeTrack(track.id));
  };

  const favoriteTracks = useSelector(
    (state: RootState) => state.favorite.tracks
  );
  
  const filteredTracks = useSelector(selectFilteredTracks);

  useEffect(() => {
    console.log("Updating tracks with data:", favoriteTracks);
    if (favoriteTracks && favoriteTracks.length > 0) {
      dispatch(updateTracks(favoriteTracks));
      handleSelectTrack(favoriteTracks[0]);
      dispatch(toggleIsPLaying());
    }
  }, [favoriteTracks]);

  if (isLoading) {
    return (
      <div>
        <Skeleton
          className={styles.playlist__item}
          baseColor="var(--color-img)"
          highlightColor="var(--color-background)"
        />
      </div>
    );
  }
  return (
    <li className={styles.playlist__item}>
      <div
        onClick={() => handleSelectTrack(track)}
        className={styles.track__title_image}
      >
        <svg className={styles.track__title_svg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>

      <div className={styles.track__title_text}>
        <a className={styles.track__title_link} href="http://">
          {data?.name}
        </a>
      </div>
      <div className={styles.track__author}>
        <a className={styles.track__author_link} href="http://">
          {data?.author}
        </a>
      </div>
      <div className={styles.track__album}>
        <a className={styles.track__album_link} href="http://">
          {data?.album}
        </a>
      </div>
      <div className={styles.track__time}>
        <svg
          onClick={() =>
            favoriteTracks.some((t) => t.id === track.id)
              ? handleDelete(track.id, `${token}`)
              : console.log("error")
          }
          className={styles.track__heart}
        >
          <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
        </svg>
        <span className={styles.track__time_text}>
          {data?.duration_in_seconds}
        </span>
      </div>
    </li>
  );
}

export default FavoriteTrack;
