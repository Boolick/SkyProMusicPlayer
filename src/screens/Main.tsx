import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Burger from "../components/BurgerMenu/Burger";
import Centerblock from "../components/Centerblock";
import Sidebar from "../components/Sidebar";
import Bar from "../components/Bar";
import "react-loading-skeleton/dist/skeleton.css";
import { selectFilteredAndSearchedTracks } from "../Store/Selectors/indexSelector";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const tracks = useSelector(selectFilteredAndSearchedTracks);
  useEffect(() => {
    setLoading(false);
    setIsLoading(false);
  }, []);

  return (
    <div className="main">
      <Burger />
      <Centerblock />
      <Sidebar />
    </div>
  );
};

export default Main;
