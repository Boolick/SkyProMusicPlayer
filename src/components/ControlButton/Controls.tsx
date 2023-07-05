import React from "react";

import StopButton from "./StopButton";
import PlayButton from "./PlayButton";
import Player from "./Player";

function Controls() {
  return (
    <div className="player__controls">
      <div className="player__btn-prev">
        <svg className="player__btn-prev-svg" /* alt="prev" */>
          <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
        </svg>
      </div>
      <Player />

      <div className="player__btn-next">
        <svg className="player__btn-next-svg" /* alt="next" */>
          <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
        </svg>
      </div>
      <div className="player__btn-repeat _btn-icon">
        <svg className="player__btn-repeat-svg" /* alt="repeat" */>
          <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
        </svg>
      </div>
      <div className="player__btn-shuffle _btn-icon">
        <svg className="player__btn-shuffle-svg" /* alt="shuffle" */>
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
        </svg>
      </div>
    </div>
  );
}

export default Controls;
