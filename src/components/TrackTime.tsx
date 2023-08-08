import React from "react";
import Skeleton from "react-loading-skeleton";

import { useGetAllTracksQuery } from "./trackApi";

interface TrackTimeProps {
  duration_in_seconds: number;
}

const TrackTime: React.FC<TrackTimeProps> = ({ duration_in_seconds }) => {
  const { data, error, isLoading } = useGetAllTracksQuery();

  if (isLoading)
    return (
      <div>
        <Skeleton></Skeleton>
      </div>
    );
  if (error) return <div>Error:{error.toString()}</div>;

  return (
    <ul>
      {data?.map((track) => (
        <div className="track__time">
          <li key={track.id} className="track__time">
            <svg className="track__time-svg">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            {track.duration_in_seconds}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default TrackTime;
