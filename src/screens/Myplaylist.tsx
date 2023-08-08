import Burger from "../components/BurgerMenu/Burger";
import Playlist from "../components/Playlist";
import Search from "../components/Search/Search";
import Content from "../components/Content";
import Bar from "../components/Bar";
import { Track } from "../components/Request/Request";

interface MyPlaylistProps {
  tracks: Track[];
}

const MyPlaylist: React.FC<MyPlaylistProps> = ({ tracks }) => {
  return (
    <>
      <Burger />
      <div className="main__centerblock centerblock">
        <Search />
        <h2 className="centerblock__h2">Мой плейлист</h2>
        <Content tracks={tracks} />
      </div>
      <h1>My playlist</h1>
      <Playlist tracks={tracks} />

      <Bar loading={false} />
    </>
  );
};

export default MyPlaylist;
