import "../css/style.css";
import Burger from "../components/BurgerMenu/Burger";
import Bar from "../components/Bar";
import Search from "../components/Search/Search";
import FavoriteTracks from "../components/FavoriteTracks";

const MyPlaylist = () => {
  return (
    <>
      <Burger />
      <div className="main__centerblock centerblock">
        <Search />
        <h2 className="centerblock__h2">Мой плейлист</h2>
        <FavoriteTracks />
      </div>
      <Bar />
    </>
  );
};

export default MyPlaylist;
