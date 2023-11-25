import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px] bg-gradient-to-b from-purple-500 to-yellow-100">
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center">
        <h1>Markets</h1>
        <div className="mt-5">
          <a href="/about" className="">
            <button
              className="m-2 hover:scale-105 duration-300 ease-in-out bg-purple-900
            text-white"
            >
              View Now
            </button>
          </a>
          {/* <button className="m-2">FAQ</button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
