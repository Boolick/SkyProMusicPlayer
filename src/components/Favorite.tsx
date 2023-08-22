/* import { useSelector, useDispatch } from "react-redux";

import styles from "./Item/Item.module.css";
import { RootState } from "../Store/store";
import { useGetAllFavoriteTracksQuery } from "../components/trackApi";
import FavoriteTrack from "./FavoriteTrack";

function FavoriteTracks() {
  const token = useSelector((state: RootState) => state.auth.token);

  const {  data, isLoading, isError } = useGetAllFavoriteTracksQuery({token});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  return (
    <ul>
      {data?.map((track) => (
        <li key={track.id}>{track.name}</li>
      ))}
    </ul>
  );
}

export default FavoriteTracks;
 */