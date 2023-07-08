import { useDispatch } from "react-redux";

import styles from "./Button.module.css";
import playerSlice from "../../../Store/Reducers/playerSlice";

function PauseButton() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(playerSlice.actions.pause())}
      className={styles.player__btn_pause}
    >
      <svg className={styles.player__btn_pause_svg} /* alt="play" */>
        <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
      </svg>
    </button>
  );
}

export default PauseButton;
