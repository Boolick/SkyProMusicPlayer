import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import cn from "classnames";

import {
  useAddFavoriteTrackByIdMutation,
  useGetAllFavoriteTracksQuery,
  useGetSelectionByIdQuery,
} from "../components/trackApi"; //   хук из   API
import styles from "../components/Item/Item.module.css";
import Burger from "../components/BurgerMenu/Burger";
import Bar from "../components/Bar";
import Search from "../components/Search/Search";
import { useTrackPlayer } from "../components/PlayTrack";
import { RootState } from "../Store/store";
import { setVolume, updateTracks } from "../Store/Actions/playerSlice";
import { selectFilteredTracks } from "../Store/Selectors/searchSelector";

const selections: { id: number; title: string; items: any[] }[] = [
  { id: 0, title: "Плейлист дня", items: [] },
  { id: 1, title: "100 танцевальных хитов", items: [] },
  { id: 2, title: "Инди-заряд", items: [] },
];

interface SelectionsPageProps {
  selectionId: number;
}

function SelectionsPage({ selectionId }: SelectionsPageProps) {
  const {
    data: selection,
    isLoading,
    error,
  } = useGetSelectionByIdQuery(selectionId);
  const [addFavoriteTrack] = useAddFavoriteTrackByIdMutation();
  const { handleSelectTrack } = useTrackPlayer();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.access);

  //Используем селектор треков по поиску
  const filteredTracks = useSelector(selectFilteredTracks);

  const { data: favoriteTracks, refetch } = useGetAllFavoriteTracksQuery({
    token,
  });
  const currentTrack = useSelector(
    (state: RootState) => state.player.currentTrack
  );
  const handleAdd = (id: number, token: string) => {
    addFavoriteTrack({ id, token });
    refetch();
  };

  useEffect(() => {
    console.log("Updating tracks with selection:", selection);
    if (selection && selection.items.length > 0) {
      dispatch(updateTracks(selection.items));
      dispatch(setVolume(0.5)); //  0.5 это половина звука
    }
  }, [selection?.items]);

  if (error) return <div>Error:{error.toString()}</div>;

  return (
    <>
      <audio id="audio-player" style={{ display: "none" }} />
      <>
        <Burger />
      </>
      <div className="main__centerblock centerblock">
        <Search />
        <h2 className="centerblock__h2">{selections[selectionId - 1].title}</h2>
        <main>
          {selection && (
            <>
              <ul className={styles.playlist}>
                {filteredTracks.map((track) => (
                  <li
                    key={track.id}
                    onClick={() => handleSelectTrack(track)}
                    className={cn({
                      [styles.active]: track === currentTrack,
                      [styles.playlist__item]: true,
                    })}
                  >
                    {isLoading ? (
                      <Skeleton
                        count={1}
                        width={51}
                        height={51}
                        baseColor="var(--color-img)"
                        highlightColor="var(--color-background)"
                      />
                    ) : (
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
                    )}
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
          )}
        </main>
      </div>
      <Bar />
    </>
  );
}

export default SelectionsPage;
