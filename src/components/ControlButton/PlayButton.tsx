import { useDispatch } from "react-redux";

function PlayButton() {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch({ type: "PLAY" })}>
      <button className="player__btn-play _btn">
        <svg className="player__btn-play-svg" /* alt="play" */>
          <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
        </svg>
      </button>
    </button>
  );
}

export default PlayButton;
