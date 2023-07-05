import React from "react";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../Store/store";
import PlayButton from "./PlayButton";
import PauseButton from "./StopButton";
import ProgressBar from "./ProgressBar";

const Player: React.FC = ({}) => {
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
    }
  }, [isPlaying]);

  return (
    <div>
      <audio ref={audioRef} src="public\Bobby_Marleni_-_Dropin.mp3" />
      {!isPlaying ? <PlayButton /> : <PauseButton />}
      {/* <ProgressBar currentTime={currentTime} duration={duration} /> */}
    </div>
  );
};

export default Player;
