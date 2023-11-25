import React from "react";

const About = () => {
  return (
    <div className="w-full h-[90vh] top-[90px] bg-gradient-to-b from-purple-500 to-yellow-100  text-whte">
      <div className="w-full h-[90%] flex flex-col justify-center items-start text-white px-12">
        <h2 className="text-[2em] max-w-[26rem] text-left mb-8">
          ALPHA ODDS WIINS THE CELO DEFI HACKATHON
        </h2>
        <p className="mb-2">ABOUT</p>
        <p className="max-w-[600px] text-[1rem] font-400">
          This is a market based on the outcome of the Celo DeFi and Trading
          hackathon. The competition will take place on Sunday 26th November
          2023 by 3pm. The YES outcome will be executed if ALPHA ODDS is
          selected as one of the top 3 teams. The NO outcome will be executed if
          the ALPHA ODDS is not selected as one of the top 3 teams.
        </p>
      </div>
    </div>
  );
};

export default About;
