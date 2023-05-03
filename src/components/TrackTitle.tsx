import React from "react";

function TrackTitle() {
  return (
    <div className="track__title">
      <div className="track__title-image">
        <svg className="track__title-svg">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track__title-text">
        <a className="track__title-link" href="http://">
          Guilt <span className="track__title-span"></span>
        </a>
      </div>
    </div>
  );
}

export default TrackTitle;
