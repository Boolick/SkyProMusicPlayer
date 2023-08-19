import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { useEffect } from "react";

import styles from "./Item/Item.module.css";
import { useTrackPlayer } from "./PlayTrack";
import {
  Track,
  useDeleteFavoriteTrackByIdMutation,
  useGetAllFavoriteTracksQuery,
} from "./trackApi";
import { RootState } from "../Store/store";
import {
  playTrack,
  setVolume,
  toggleIsPLaying,
  updateTracks,
} from "../Store/Actions/playerSlice";

function FavoriteTracks() {
  const token = useSelector((state: RootState) => state.auth.access);
  const dispatch = useDispatch();
  const { handleSelectTrack } = useTrackPlayer();
  const [deleteFavoriteTrack] = useDeleteFavoriteTrackByIdMutation();
  const {
    data: favoriteTraks,
    isLoading,
    refetch,
  } = useGetAllFavoriteTracksQuery({
    token,
  });

  const handleDelete = (id: number, token: string) => {
    deleteFavoriteTrack({ id, token });
    refetch();
  };
  // Выбираем первый трек при загрузке страницы
  useEffect(() => {
    if (favoriteTraks && favoriteTraks.length > 0) {
      dispatch(playTrack(favoriteTraks[0]));
      dispatch(toggleIsPLaying());
    }
  }, [favoriteTraks]);

  // Обновляем список треков и уровень громкости
  useEffect(() => {
    console.log("Updating tracks with data:", favoriteTraks);
    if (favoriteTraks && favoriteTraks.length > 0) {
      dispatch(updateTracks(favoriteTraks));
      dispatch(setVolume(0.5)); //  0.5 это половина звука
    }
  }, [favoriteTraks]);

  console.log(favoriteTraks);

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
    <>
      <audio id="audio-player" style={{ display: "none" }} />
      <ul className={styles.playlist}>
        {favoriteTraks ? (
          favoriteTraks.map((track: Track) => (
            <li key={track.id} className={styles.playlist__item}>
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
                  onClick={() => handleDelete(track.id, `${token}`)}
                  className={styles.track__heart}
                >
                  <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
                </svg>
                <span className={styles.track__time_text}>
                  {track.duration_in_seconds}
                </span>
              </div>
            </li>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </>
  );
}

export default FavoriteTracks;
