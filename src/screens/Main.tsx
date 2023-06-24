import React, { useEffect, useState } from "react";

import Burger from "../components/BurgerMenu/Burger";
import Centerblock from "../components/Centerblock";
import Sidebar from "../components/Sidebar";
import Bar from "../components/Bar";
import { Track } from "../components/Request/Request";
import "react-loading-skeleton/dist/skeleton.css";

interface MainProps {
  tracks: Track[];
}

const Main: React.FC<MainProps> = ({ tracks }) => {
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    setIsLoading(false);
  }, []);

  return (
    <div className="main">
      <Burger />
      <Centerblock tracks={tracks} />
      <Sidebar />
      <Bar loading={false} />;
    </div>
  );
};

export default Main;
