import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../Store/store";
import PlayButton from "./Buttons/PlayButton";
import PauseButton from "./Buttons/PauseButton";
import playerSlice from "../../Store/Reducers/playerSlice";

const Player: React.FC = () => {
  const dispatch = useDispatch();
  const { isPlaying } = useSelector((state: RootState) => state.player);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
      // Обработчик обновления времени
      const handleTimeUpdate = () => {
        dispatch(
          playerSlice.actions.updateProgress({
            currentTime: audioElement.currentTime,
            duration: audioElement.duration,
          })
        );
      };

      // Обработчик события загрузки
      const handleLoadedData = () => {
        dispatch(
          playerSlice.actions.updateProgress({
            currentTime: 0,
            duration: audioElement.duration,
          })
        );
      };

      // Добавление слушателя событий
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("loadedmetadata", handleLoadedData);

      // Удаление слушателя событий
      return () => {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
        audioElement.removeEventListener("loadedmetadata", handleLoadedData);
      };
    }
  }, [isPlaying, dispatch]);

  return (
    <div>
      <audio ref={audioRef} src="/Bobby_Marleni_-_Dropin.mp3" />
      {!isPlaying ? <PlayButton /> : <PauseButton />}
    </div>
  );
};

export default Player;
