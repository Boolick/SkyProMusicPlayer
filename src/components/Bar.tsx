import React from "react";
import TrackPlay from "./TrackPlay";
import Controls from "./Controls";
import VolumeBlock from "./VolumeBlock";

function Bar() {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress"></div>
        <div className="bar__player-block">
          <div className="bar__player player">
            <Controls />
            <TrackPlay />
          </div>
          <VolumeBlock />
        </div>
      </div>
    </div>
  );
}

export default Bar;
