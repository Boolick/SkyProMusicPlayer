import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../Store/store";
import PlayButton from "./Buttons/PlayButton";
import PauseButton from "./Buttons/PauseButton";
import { updateProgress } from "../../Store/Actions/playerSlice";

const Player = () => {
  const dispatch = useDispatch();
  const currentTrack = useSelector(
    (state: RootState) => state.player.currentTrack
  );
  const isPlaying = useSelector((state: RootState) => state.player.isPlaying);

  // Обновление элемента audio при изменении выбранного трека или состояния воспроизведения
  useEffect(() => {
    const audioPlayer = document.getElementById(
      "audio-player"
    ) as HTMLAudioElement;
    if (currentTrack) {
      if (audioPlayer.src !== currentTrack.track_file) {
        audioPlayer.src = currentTrack.track_file;
      }

      if (isPlaying) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }

      // Обработчик обновления времени
      const handleTimeUpdate = () => {
        dispatch(
          updateProgress({
            currentTime: audioPlayer.currentTime,
            duration: audioPlayer.duration,
          })
        );
      };

      // Обработчик события загрузки
      const handleLoadedData = () => {
        dispatch(
          updateProgress({
            currentTime: 0,
            duration: audioPlayer.duration,
          })
        );
      };

      // Добавление слушателя событий
      audioPlayer.addEventListener("timeupdate", handleTimeUpdate);
      audioPlayer.addEventListener("loadedmetadata", handleLoadedData);

      // Удаление слушателя событий
      return () => {
        audioPlayer.removeEventListener("timeupdate", handleTimeUpdate);
        audioPlayer.removeEventListener("loadedmetadata", handleLoadedData);
      };
    }
  }, [currentTrack, isPlaying, dispatch]);

  return <div>{isPlaying ? <PauseButton /> : <PlayButton />}</div>;
};

export default Player;
