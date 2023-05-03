import React from "react";
import Header from "../components/BurgerMenu/Burger";
import Centerblock from "../components/Centerblock";
import Sidebar from "../components/Sidebar";
import Bar from "../components/Bar";
import { Track } from "../components/Request/Request";

interface MainProps {
  tracks: Track[];
}

const Main: React.FC<MainProps> = ({ tracks }) => {
  return (
    <div className="main">
      <Header />
      <Centerblock tracks={tracks} />
      <Sidebar />
      <Bar />
    </div>
  );
};

export default Main;
