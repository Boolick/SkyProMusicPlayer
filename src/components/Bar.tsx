import "react-loading-skeleton/dist/skeleton.css";
import TrackPlay from "./TrackPlay";
import Controls from "./ControlButton/Controls";
import VolumeBlock from "./VolumeBlock";
import ProgressBar from "./ControlButton/ProgressBar/ProgressBar";

function Bar() {
  return (
    <div className="bar">
      <div className="bar__content">
        <ProgressBar currentTime={0} duration={0} />
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
