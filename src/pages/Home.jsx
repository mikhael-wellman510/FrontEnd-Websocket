import React, { useEffect } from "react";
import HomeLeft from "../components/HomeLeft";
import HomeRight from "../components/HomeRight";

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex h-full">
        <div className="w-[25%] bg-white">
          <HomeLeft />
        </div>
        <div className="w-[75%] ">
          <HomeRight />
        </div>
      </div>
    </div>
  );
};

export default Home;
