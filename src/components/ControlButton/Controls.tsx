import { useSelector } from "react-redux";

import { RootState } from "../../Store/store";
import Player from "./Player";
import { useGetAllTracksQuery } from "../../components/trackApi";
import { useTrackPlayer } from "../PlayTrack";

function Controls() {
  const { handleSelectTrack, handleTogglePlay } = useTrackPlayer();
  const { data: tracks } = useGetAllTracksQuery();

  const currentTrack = useSelector(
    (state: RootState) => state.player.currentTrack
  );

  const isPlaying = useSelector((state: RootState) => state.player.isPlaying);

  // Функция для переключения на следующий трек
  function handleNextTrack() {
    if (!tracks) return;

    // Находим индекс текущего трека в массиве tracks
    const currentTrackIndex = tracks.findIndex(
      (track) => track.id === currentTrack?.id
    );

    // Определяем индекс следующего трека
    let nextTrackIndex = currentTrackIndex + 1;
    console.log(nextTrackIndex);

    // Если индекс выходит за пределы массива, то возвращаем его к началу
    if (nextTrackIndex >= tracks.length) {
      nextTrackIndex = 0;
    }

    // Получаем следующий трек из массива tracks
    const nextTrack = tracks[nextTrackIndex];

    // Выбираем следующий трек для воспроизведения
    handleSelectTrack(nextTrack);
    if (!isPlaying) return handleTogglePlay();
  }

  // Функция для переключения на предыдущий трек
  function handlePrevTrack() {
    if (!tracks) return;

    // Находим индекс текущего трека в массиве tracks
    const currentTrackIndex = tracks.findIndex(
      (track) => track.id === currentTrack?.id
    );
    console.log(currentTrackIndex);
    // Определяем индекс предыдущего трека
    let prevTrackIndex = currentTrackIndex - 1;

    // Если индекс меньше нуля, то переходим к концу массива
    if (prevTrackIndex < 0) {
      prevTrackIndex = tracks.length - 1;
    }

    // Получаем предыдущий трек из массива tracks
    const prevTrack = tracks[prevTrackIndex];

    // Выбираем предыдущий трек для воспроизведения
    handleSelectTrack(prevTrack);
  }

  // Функция для повторения текущего трека
  function handleRepeatTrack() {
    // Здесь должна быть логика для повторения текущего трека
  }

  // Функция для перемешивания списка воспроизведения
  function handleShuffleTracks() {
    // Здесь должна быть логика для перемешивания списка воспроизведения
  }

  return (
    <div className="player__controls">
      <div className="player__btn-prev" onClick={handlePrevTrack}>
        <svg className="player__btn-prev-svg" /* alt="prev" */>
          <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
        </svg>
      </div>
      <Player />
      <div className="player__btn-next" onClick={handleNextTrack}>
        <svg className="player__btn-next-svg" /* alt="next" */>
          <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
        </svg>
      </div>
      <div className="player__btn-repeat _btn-icon" onClick={handleRepeatTrack}>
        <svg className="player__btn-repeat-svg" /* alt="repeat" */>
          <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
        </svg>
      </div>
      <div
        className="player__btn-shuffle _btn-icon"
        onClick={handleShuffleTracks}
      >
        <svg className="player__btn-shuffle-svg" /* alt="shuffle" */>
          <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
        </svg>
      </div>
    </div>
  );
}

export default Controls;
