import { useDispatch, useSelector } from "react-redux";

import styles from "./Volume.module.css";
import { setVolume } from "../../Store/Actions/playerSlice";
import { RootState } from "../../Store/store";

function VolumeBlock() {
  const dispatch = useDispatch();
  const volume = useSelector((state: RootState) => state.player.volume);
  function handleVolumeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const audioPlayer = document.getElementById(
      "audio-player"
    ) as HTMLAudioElement;
    audioPlayer.volume = Number(event.target.value);
    dispatch(setVolume(Number(event.target.value)));
  }
  return (
    <div className={styles.bar__volume_block}>
      <div className={styles.volume__content}>
        <div className={styles.volume__image}>
          <svg className={styles.volume__svg} /* alt="volume" */>
            <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
          </svg>
        </div>
        <div className={styles.volume__progress}>
          <input
            className={styles.volume__progress_line}
            type="range"
            name="range"
            min="0"
            max="1"
            step="0.01"
            onChange={handleVolumeChange}
            value={volume}
          />
        </div>
      </div>
    </div>
  );
}

export default VolumeBlock;
