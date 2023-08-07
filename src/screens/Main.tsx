import React, { useEffect, useState } from "react";
import Header from "../components/BurgerMenu/Burger";
import Centerblock from "../components/Centerblock";
import Sidebar from "../components/Sidebar";
import Bar from "../components/Bar";
import { Track } from "../components/Request/Request";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface MainProps {
  tracks: Track[];
}

const Main: React.FC<MainProps> = ({ tracks }) => {
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="main">
      <Header />
      <Centerblock tracks={tracks} />
      <Sidebar />
      <Bar loading={loading} />;
    </div>
  );
};

export default Main;
