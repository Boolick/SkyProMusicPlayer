import React from "react";
import { Track } from "./Request/Request";

interface TrackTimeProps {
  duration_in_seconds: number;
}

const TrackTime: React.FC<TrackTimeProps> = ({ duration_in_seconds }) => {
  return (
    <div className="track__time">
      <svg className="track__time-svg">
        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
      </svg>

      <span className="track__time-text">{duration_in_seconds}</span>
    </div>
  );
};

export default TrackTime;
