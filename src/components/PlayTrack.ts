import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  playTrack,
  pauseTrack,
  resumeTrack,
} from "../Store/Actions/playerSlice";
import { RootState } from "../Store/store";
import { Track } from "./trackApi";

/**
 * Кастомный хук для проигрывания
 * Управляет выбором дорожки и toggling, play/pause.
 *
 * @returns {Object} Объект, содержащий обработчики событий для переключения воспроизведения и выбора дорожки.
 */

export function useTrackPlayer() {
  const dispatch = useDispatch();
  const currentTrack = useSelector(
    (state: RootState) => state.player.currentTrack
  );
  const isPlaying = useSelector((state: RootState) => state.player.isPlaying);

  /**
   * Обновляем элемент audio при изменении выбранной дорожки или состояние воспроизведения.
   */
  useEffect(() => {
    const audioPlayer = document.getElementById(
      "audio-player"
    ) as HTMLAudioElement;
    if (audioPlayer) {
      if (currentTrack) {
        // Добавляем обработчик события canplaythrough
        audioPlayer.addEventListener("canplaythrough", () => {
          // Вызываем метод play() на элементе audio
          audioPlayer.play().catch((error) => {
            console.log(error);
          });
        });
        if (audioPlayer.src !== currentTrack.track_file) {
          audioPlayer.src = currentTrack.track_file;
        }
      }
    }
  }, [currentTrack, isPlaying]);

  /**
   * Обработчик события выбора трека.
   *
   * @param {Track} track - Выбранный трек.
   */
  function handleSelectTrack(track: Track) {
    dispatch(playTrack(track));
    dispatch(resumeTrack());
  }

  /**
   * Обработчик для переключения play/pause.
   */
  function handleTogglePlay() {
    if (isPlaying) {
      dispatch(pauseTrack());
    }
  }

  return { handleTogglePlay, handleSelectTrack };
}
