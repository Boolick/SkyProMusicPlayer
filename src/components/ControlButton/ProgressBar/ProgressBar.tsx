import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./ProgressBar.module.css";
import { RootState } from "../../../Store/store";
import {
  resumeTrack,
  updateProgress,
} from "../../../Store/Actions/playerSlice";
import { useTrackPlayer } from "../../PlayTrack";

interface ProgressBar {
  currentTime: number;
  duration: number;
}

const ProgressBar = () => {
  const [isPlaying, setIsplaying] = useState(false);

  const dispatch = useDispatch();
  const currentTrack = useSelector(
    (state: RootState) => state.player.currentTrack
  );
  const { currentTime, duration } = useSelector(
    (state: RootState) => state.player
  );

  const progress = (currentTime / duration) * 100;

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const progressBar = e.currentTarget;
    dispatch(resumeTrack());
    // Вычисляем новое значение текущего времени воспроизведения
    const newCurrentTime =
      ((e.clientX - progressBar.offsetLeft) / progressBar.offsetWidth) *
      duration;

    // Обновляем текущее время воспроизведения
    dispatch(updateProgress({ currentTime: newCurrentTime, duration }));

    // Находим элемент audio и обновляем его свойство currentTime
    const audioPlayer = document.querySelector("audio");
    if (audioPlayer) {
      audioPlayer.currentTime = newCurrentTime;
      setIsplaying((prevIsPlaying) => !prevIsPlaying);

      if (!isPlaying) {
        console.log("Прогрессбар был нажат, но воспроизведение запущено");
        console.log(isPlaying);
      }
    }
  }

  return (
    <div onClick={handleClick} className={styles.progressLine}>
      <div
        className={styles.playerProgress}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
