import React from "react";

const Subscribe = () => {
  return (
    <div
      id="subscribe"
      className="w-full h-auto bg-black pt-[8rem] pb-[2rem]"
      data-aos="fade-in"
    >
      <div className="flex flex-col justify-center ">
        <p className="text-white font-semibold text-[10px] text-center">
          LIKE WHAT YOU SEE?
        </p>
        <h1 className="text-white font-semibold text-[38px] text-center">
          Let's work together
        </h1>
        <p className="mt-5 max-w-[300px] md:max-w-[410px] lg:max-w-[384px] text-white text-center justify-center text-[13px] ml-auto mr-auto">
          If you’re looking for a kick-ass digital ninja, I'm here to help!
        </p>
        <button className="w-[134px] h-[40px] rounded-[5px] bg-white text-tertiary mt-5 ml-auto mr-auto hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
          <a
            href="mailto:defisolutions@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            Get in touch
          </a>
        </button>
      </div>
      <div className="w-[90vw] border-white"></div>
    </div>
  );
};

export default Subscribe;
