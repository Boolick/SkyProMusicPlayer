import Search from "./Search/Search";
import Filter from "./Filter/Filter";
import Content from "./Content";

const Centerblock = () => {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <Filter />
      <Content />
    </div>
  );
};

export default Centerblock;
