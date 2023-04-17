import React from "react";
import Header from "../components/Header";
import Centerblock from "../components/Centerblock";
import Sidebar from "../components/Sidebar";
import Bar from "../components/Bar";

function Main() {
  return (
    <>
      <div className="main">
        <Header />
        <Centerblock />
        <Sidebar />
      </div>
      <Bar />
    </>
  );
}

export default Main;
