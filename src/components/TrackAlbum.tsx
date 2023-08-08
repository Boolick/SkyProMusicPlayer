import { useSelector } from "react-redux";

import { RootState } from "../Store/store";
import { useGetAllTracksQuery } from "../components/trackApi";

import styles from "./TrackAlbum.module.css";

function TrackAlbum() {
  const { data } = useGetAllTracksQuery();
  const tracks = useSelector((state: RootState) => data);

  if (!tracks) return <div>Loading...</div>;

  return (
    <div className={styles.track__album}>
      {tracks.map((track) => (
        <a key={track.id} className={styles.track__album_link} href="http://">
          {track.album}
        </a>
      ))}
    </div>
  );
}

export default TrackAlbum;
