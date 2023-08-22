import "react-loading-skeleton/dist/skeleton.css";
import TrackPlay from "./TrackPlay";
import Controls from "./ControlButton/Controls";
import VolumeBlock from "./Volume/VolumeBlock";
import ProgressBar from "./ControlButton/ProgressBar/ProgressBar";
import { Track } from "./trackApi";

function Bar(tracks: { tracks: Track[] }) {
  return (
    <div className="bar">
      <ProgressBar />
      <div className="bar__content">
        <div className="bar__player-block">
          <div className="bar__player player">
            <Controls tracks={tracks.tracks} />
            <TrackPlay />
          </div>
          <VolumeBlock />
        </div>
      </div>
    </div>
  );
}

export default Bar;
