import { useDispatch } from "react-redux";

function PauseButton() {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch({ type: "PAUSE" })}>
    <button className="player__btn-pause _btn">
      <svg className="player__btn-pause-svg" /* alt="play" */>
        <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
      </svg>
    </button>
  </button>
  );
}

export default PauseButton;
