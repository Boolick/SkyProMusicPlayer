import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import cn from "classnames";

import styles from "./Item/Item.module.css";
import { useTrackPlayer } from "./PlayTrack";
import {
  Track,
  useDeleteFavoriteTrackByIdMutation,
  useGetAllFavoriteTracksQuery,
} from "./trackApi";
import { RootState } from "../Store/store";
import { selectFilteredTracks } from "../Store/Selectors/searchSelector";
import { setVolume, updateTracks } from "../Store/Actions/playerSlice";

function FavoriteTracks() {
  const token = useSelector((state: RootState) => state.auth.access);
  const {
    data: favoriteTraks,
    error,
    refetch,
  } = useGetAllFavoriteTracksQuery({
    token,
  });
  const dispatch = useDispatch();
  const { handleSelectTrack } = useTrackPlayer();
  const [deleteFavoriteTrack] = useDeleteFavoriteTrackByIdMutation();
  const currentTrack = useSelector(
    (state: RootState) => state.player.currentTrack
  );
  //Используем селектор треков по поиску
  const filteredTracks = useSelector(selectFilteredTracks);

  const handleDelete = (id: number, token: string) => {
    deleteFavoriteTrack({ id, token });
    refetch();
  };

  // Обновляем список треков и уровень громкости
  useEffect(() => {
    console.log("Updating tracks with data:", favoriteTraks);
    if (favoriteTraks && favoriteTraks.length > 0) {
      dispatch(updateTracks(favoriteTraks));
      dispatch(setVolume(0.5)); //  0.5 это половина звука
    }
  }, [favoriteTraks]);

  if (error) return <div>Error:{error.toString()}</div>;

  return (
    <>
      <audio id="audio-player" style={{ display: "none" }} />
      <ul className={styles.playlist}>
        {favoriteTraks ? (
          filteredTracks?.map((track: Track) => (
            <li
              key={track.id}
              onClick={() => handleSelectTrack(track)}
              className={cn({
                [styles.active]: track === currentTrack,
                [styles.playlist__item]: true,
              })}
            >
              <div
                className={cn({
                  [styles.active]: track === currentTrack,
                  [styles.track__title_image]: true,
                })}
              >
                <svg className={styles.track__title_svg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                </svg>
              </div>

              <div className={styles.track__title_text}>
                <div
                  className={cn({
                    [styles.active]: track === currentTrack,
                    [styles.track__title_text]: true,
                  })}
                >
                  {track.name}
                </div>
              </div>
              <div className={styles.track__author}>
                <div
                  className={cn({
                    [styles.active]: track === currentTrack,
                    [styles.track__author_link]: true,
                  })}
                >
                  {track.author}
                </div>
              </div>
              <div className={styles.track__album}>
                <div
                  className={cn({
                    [styles.active]: track === currentTrack,
                    [styles.track__album_link]: true,
                  })}
                >
                  {track.album}
                </div>
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
