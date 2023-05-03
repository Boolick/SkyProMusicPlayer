import React from "react";
import TrackTitle from "./TrackTitle";
import TrackAuthor from "./TrackAuthor/TrackAuthor";
import TrackAlbum from "./TrackAlbum";
import TrackTime from "./TrackTime";
import TracksList, { Track } from "./Request/Request";

interface ItemProps {
  tracks: Track[];
}

const Item: React.FC<ItemProps> = ({ tracks }) => {
  console.log(tracks);
  return (
    <div>
      {tracks.map((track) => (
        <div key={track.id} className="playlist__item">
          <div className="playlist__track track">
            <div className="track__title">
              <div className="track__title-image">
                <svg className="track__title-svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
              </div>

              <div className="track__title-text">
                <a className="track__title-link" href="http://">
                  {track.name} <span className="track__title-span"></span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a className="track__author-link" href="http://">
                {track.author}
              </a>
            </div>
            <div className="track__album">
              <a className="track__album-link" href="http://">
                {track.album}
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </svg>

              <span className="track__time-text">{track.duration_in_seconds}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
