import { useDispatch } from "react-redux";

import styles from "./Button.module.css";
import { playTrack, resumeTrack } from "../../../Store/Actions/playerSlice";

function PlayButton() {
  const dispatch = useDispatch();
  return (
    <button
      data-testid="play-button"
      onClick={() => dispatch(resumeTrack())}
      className={styles.player__btn_play}
    >
      <svg className={styles.player__btn_play_svg} /* alt="play" */>
        <use
          className={styles.btn_icon}
          xlinkHref="/img/icon/sprite.svg#icon-play"
        ></use>
      </svg>
    </button>
  );
}

export default PlayButton;
