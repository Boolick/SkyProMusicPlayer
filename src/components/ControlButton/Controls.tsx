import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";

import styles from "./Buttons/Button.module.css";
import { RootState } from "../../Store/store";
import Player from "./Player";
import { Track, useGetAllTracksQuery } from "../../components/trackApi";
import { useTrackPlayer } from "../PlayTrack";
import {
  resumeTrack,
  toggleIsRepeat,
  updateTracks,
} from "../../Store/Actions/playerSlice";

function Controls() {
  const dispatch = useDispatch();

  const { handleSelectTrack } = useTrackPlayer();

   

  const currentTrack = useSelector(
    (state: RootState) => state.player.currentTrack
  );
  const tracks = useSelector((state: RootState) => state.player.tracks);
  // Функция для переключения на следующий трек
  function handleNextTrack() {
    if (!tracks) return;

    // Находим индекс текущего трека в массиве tracks
    const currentTrackIndex = tracks.findIndex(
      (track) => track.id === currentTrack?.id
    );

    // Определяем индекс следующего трека
    let nextTrackIndex = currentTrackIndex + 1;

    // Если индекс выходит за пределы массива, то возвращаем его к началу
    if (nextTrackIndex >= tracks.length) {
      nextTrackIndex = 0;
    }

    // Получаем следующий трек из массива tracks
    const nextTrack = tracks[nextTrackIndex];

    // Выбираем следующий трек для воспроизведения
    handleSelectTrack(nextTrack);
    dispatch(resumeTrack());
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
    dispatch(resumeTrack());
  }

  // Функция для перемешивания списка воспроизведения
  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function handleShuffleTracks() {
    // Добавляем копию массива
    if (!tracks) return;
    const shuffledTracks = [...tracks];

    // Перемешиваем скопированный массив
    shuffleArray(shuffledTracks);

    function updateTracksState(shuffledTracks: Track[]) {
      dispatch(updateTracks(shuffledTracks));
    }

    // Обновляем state перемешанным массивом
    updateTracksState(shuffledTracks);
  }

  // Функция для повторения текущего трека
  const [isRepeat, setIsRepeat] = useState(false);
  function handleRepeatTrack() {
    console.log("Toggling repeat...");
    if (!currentTrack) return;
    setIsRepeat((prevIsRepeat) => !prevIsRepeat);
    dispatch(toggleIsRepeat());
  }

  useEffect(() => {
    const audioPlayer = document.getElementById(
      "audio-player"
    ) as HTMLAudioElement;
    if (audioPlayer) {
      const handleEnded = () => {
        console.log("Track ended. Repeat:", isRepeat);
        if (isRepeat) {
          console.log(isRepeat);
          audioPlayer.currentTime = 0;
          audioPlayer.play();
        } else {
          handleNextTrack();
        }
      };
      audioPlayer.addEventListener("ended", handleEnded);
      return () => {
        audioPlayer.removeEventListener("ended", handleEnded);
      };
    }
  }, [isRepeat]);

  return (
    <div className="player__controls">
      <div className={styles.player__btn_prev} onClick={handlePrevTrack}>
        <svg className={styles.player__btn_prev_svg} /* alt="prev" */>
          <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
        </svg>
      </div>
      <Player />
      <div className={styles.player__btn_next} onClick={handleNextTrack}>
        <svg className={styles.player__btn_next_svg} /* alt="next" */>
          <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
        </svg>
      </div>
      <div
        onClick={handleRepeatTrack}
        className={cn(styles.player__btn_repeat, styles._btn_icon, {
          [styles.active]: isRepeat,
        })}
      >
        <svg
          className={styles.player__btn_repeat_svg}

          /* alt="repeat" */
        >
          <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
        </svg>
      </div>
      <div
        className={cn(styles.player__btn_shuffle, styles._btn_icon, {
          [styles._active]: isRepeat,
        })}
        onClick={handleShuffleTracks}
      >
        <svg className={styles.player__btn_shuffle_svg} /* alt="shuffle" */>
          <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
        </svg>
      </div>
    </div>
  );
}

export default Controls;
