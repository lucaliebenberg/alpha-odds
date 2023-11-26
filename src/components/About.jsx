import React from "react";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="w-full h-[90vh] top-[90px] bg-gradient-to-b from-purple-500 to-yellow-100 text-whte flex flex-row justify-between align-middle">
      <div className="w-full h-[90%] flex flex-col justify-center items-start text-white px-12">
        <h2 className="text-[2em] max-w-[26rem] text-left mb-8 font-mono">
          ALPHA ODDS WINS THE CELO DEFI HACKATHON
        </h2>
        <p className="mb-2">ABOUT</p>
        <div className="border border-white w-[82%] mb-4">
          <hr />
        </div>
        <p className="max-w-[510px] text-[1rem] font-400">
          This is a market based on the outcome of the Celo DeFi and Trading
          hackathon. The competition will take place on Sunday 26th November
          2023 by 3pm. The YES outcome will be executed if ALPHA ODDS is
          selected as one of the top 3 teams. The NO outcome will be executed if
          the ALPHA ODDS is not selected as one of the top 3 teams.
        </p>
      </div>
      <div className="mr-12 mt-auto mb-auto">
        <AboutCard />
      </div>
    </div>
  );
};

export default About;
