import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { useEffect } from "react";

import { RootState } from "../Store/store";
import {
  useGetAllTracksQuery,
  useAddFavoriteTrackByIdMutation,
  useGetAllFavoriteTracksQuery,
} from "../components/trackApi";
import { selectFilteredTracks } from "../Store/Selectors/searchSelector";
import styles from "./Item/Item.module.css";

import { useTrackPlayer } from "./PlayTrack";
import {
  playTrack,
  setVolume,
  toggleIsPLaying,
  updateTracks,
} from "../Store/Actions/playerSlice";

export const TrackAlbum = () => {
  const dispatch = useDispatch();
  const { handleSelectTrack } = useTrackPlayer();
  const { data, isLoading, isError } = useGetAllTracksQuery();
  const [addFavoriteTrack] = useAddFavoriteTrackByIdMutation();
  const token = useSelector((state: RootState) => state.auth.access);

  //Используем селектор треков по поиску
  const filteredTracks = useSelector(selectFilteredTracks);

  const { data: favoriteTracks, refetch } = useGetAllFavoriteTracksQuery({
    token,
  });

  const handleAdd = (id: number, token: string) => {
    addFavoriteTrack({ id, token });
    refetch();
  };

  const tracks = useSelector((state: RootState) => state.player.tracks);

  // Выбираем первый трек при загрузке страницы
  useEffect(() => {
    if (tracks && tracks.length > 0) {
      dispatch(playTrack(tracks[0]));
      dispatch(toggleIsPLaying());
    }
  }, [tracks]);

  // Обновляем список треков и уровень громкости
  useEffect(() => {
    console.log("Updating tracks with data:", data);
    if (data && data.length > 0) {
      dispatch(updateTracks(data));
      dispatch(setVolume(0.5)); //  0.5 это половина звука
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

  if (isError) return <div>Error:{isError.toString()}</div>;

  return (
    <>
      <audio id="audio-player" style={{ display: "none" }} />
      <ul className={styles.playlist}>
        {filteredTracks.map((track) => (
          <li key={track.id} className={styles.playlist__item}>
            {isLoading ? (
              <>
                <Skeleton
                  count={filteredTracks.length}
                  height={50}
                  width={500}
                  baseColor="var(--color-img)"
                  highlightColor="var(--color-background)"
                ></Skeleton>
              </>
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
                onClick={() => handleAdd(track.id, `${token}`)}
                className={cn(styles.track__heart, {
                  [styles.track__heart_favorite]: favoriteTracks?.some(
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
