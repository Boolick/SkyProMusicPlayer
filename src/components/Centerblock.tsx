import React from "react";
import Search from "./Search";
import Filter from "./Filter/Filter";
import Content from "./Content";
import { Track } from "./Request/Request";

interface CenterblockProps {
  tracks: Track[];
}

const Centerblock = ({ tracks }: CenterblockProps) => {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <Filter tracks={tracks} />
      <Content tracks={tracks} />
    </div>
  );
};

export default Centerblock;
