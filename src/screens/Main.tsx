import React, { useEffect, useState } from "react";

import Burger from "../components/BurgerMenu/Burger";
import Centerblock from "../components/Centerblock";
import Sidebar from "../components/Sidebar";
import Bar from "../components/Bar";
import "react-loading-skeleton/dist/skeleton.css";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    setIsLoading(false);
  }, []);

  return (
    <div className="main">
      <Burger />
      <Centerblock />
      <Sidebar />
      <Bar />;
    </div>
  );
};

export default Main;
