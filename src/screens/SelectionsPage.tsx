import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";

import { useGetSelectionByIdQuery } from "../components/trackApi"; //   хук из   API
import styles from "../components/Item/Item.module.css";
import Burger from "../components/BurgerMenu/Burger";
import Bar from "../components/Bar";
import Search from "../components/Search/Search";
import { useTrackPlayer } from "../components/PlayTrack";
import { RootState } from "../Store/store";
import { useEffect } from "react";

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
  const { handleSelectTrack, handleTogglePlay } = useTrackPlayer();
  const isPlaying = useSelector((state: RootState) => state.player.isPlaying);

  // Выбираем первый трек при загрузке страницы
  useEffect(() => {
    if (selection) {
      if (selection && selection.items.length > 0) {
        handleSelectTrack(selection.items[0]);
      }
    }
  }, [selection]);

  if (isLoading) return;
  <Skeleton
    count={29}
    baseColor="var(--color-img)"
    highlightColor="var(--color-background)"
  ></Skeleton>;

  if (error) return <div>Error:{error.toString()}</div>;

  return (
    <>
      <>
        <Burger />
      </>
      <div className="main__centerblock centerblock">
        <Search />
        <h2 className="centerblock__h2">{selections[selectionId - 1].title}</h2>
        <main>
          {selection && (
            <>
              <audio id="audio-player" style={{ display: "none" }} />
              <ul className={styles.playlist}>
                {selection.items.map((track) => (
                  <li key={track.id} className={styles.playlist__item}>
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
                      <svg className={styles.track__heart}>
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
function handleTogglePlay() {
  throw new Error("Function not implemented.");
}
