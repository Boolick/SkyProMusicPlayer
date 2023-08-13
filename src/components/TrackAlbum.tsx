import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { useEffect, useState } from "react";

import { RootState } from "../Store/store";
import {
  useGetAllTracksQuery,
  useAddFavoriteTrackByIdMutation,
} from "../components/trackApi";
import styles from "./Item/Item.module.css";
import { addTrack, removeTrack } from "../Store/Reducers/favoriteSlice";
import { useTrackPlayer } from "./PlayTrack";
import {
  playTrack,
  toggleIsPLaying,
  updateTracks,
} from "../Store/Actions/playerSlice";

export const TrackAlbum = () => {
  const dispatch = useDispatch();
  const { handleSelectTrack } = useTrackPlayer();
  const { data, isLoading, error } = useGetAllTracksQuery();
  const [addFavoriteTrack] = useAddFavoriteTrackByIdMutation();

  // Обновление элемента audio при изменении выбранного трека или состояния воспроизведения
  const isPlaying = useSelector((state: RootState) => state.player.isPlaying);

  const favoriteTracks = useSelector(
    (state: RootState) => state.favorite.tracks
  );

  const handleAdd = (id: number) => {
    addFavoriteTrack(id);
  };

  const tracks = useSelector((state: RootState) => state.player.tracks);

  // Выбираем первый трек при загрузке страницы
  useEffect(() => {
    if (tracks && tracks.length > 0) {
      dispatch(playTrack(tracks[0]));
      dispatch(toggleIsPLaying());
    }
  }, [tracks]);

  // Обновляем список треков
  useEffect(() => {
    console.log("Updating tracks with data:", data);
    if (data && data.length > 0) {
      dispatch(updateTracks(data));
    }
  }, [data]);

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
    <>
      <audio id="audio-player" style={{ display: "none" }} />
      <ul className={styles.playlist}>
        {tracks?.map((track) => (
          <li key={track.id} className={styles.playlist__item}>
            {isLoading ? (
              <Skeleton />
            ) : (
              <div
                onClick={() => handleSelectTrack(track)}
                className={styles.track__title_image}
              >
                <svg className={styles.track__title_svg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
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
                    ? handleAdd(track.id)
                    : dispatch(addTrack(track))
                }
                className={cn(styles.track__heart, {
                  [styles.track__heart_favorite]: favoriteTracks.some(
                    (t) => t.id === track.id
                  ),
                })}
              >
                <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
              </svg>

              <span className={styles.track__time_text}>
                {track.duration_in_seconds}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TrackAlbum;
