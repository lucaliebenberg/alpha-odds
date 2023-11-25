import React from "react";

const AboutCard = () => {
  return (
    <div className="w-[34vw] h-auto miin-h-[50.8vh] top-[90px] bg-transparent text-whte border border-white rounded-md">
      {/* Top section  */}
      <div className="text-white p-3">
        <p className="">ALPHA ODDS WINS THE CELO DEFI HACKATHON</p>
        <div>
          <p className="mb-2">BUY</p>
          <hr />
        </div>

        {/* Outcome section  */}
        <div className="p-1">
          <p className="mt-2 mb-2">OUTCOME</p>
          <div className="flex flex-row justify-center align-middle gap-8 px-4">
            <button className="w-[141px] h-[36px] border border-white rounded-[10px] pt-2">
              <span>YES</span>
            </button>
            <button className="w-[141px] h-[36px] border border-white rounded-[10px] pt-2">
              <span>NO</span>
            </button>
          </div>
        </div>

        {/* Amount section  */}
        <div className="p-1">
          <p className="mt-2 mb-2">AMOUNT</p>
          <div className="w-full flex justify-center align-middle mt-4 mb-4">
            <button className=" border border-white rounded-[10px] w-[90%]">
              0$
            </button>
          </div>
          <div className="w-full flex justify-center align-middle">
            <button className=" border border-white rounded-[10px] w-[90%]">
              BUY
            </button>
          </div>
        </div>

        {/* Summary titles */}
        <div className="mt-6 mb-2">
          <div className="flex flex-row justify-between align-middle px-2 text-white">
            <div>AVG PRICE</div>
            <div>0</div>
          </div>
          <div className="flex flex-row justify-between align-middle px-2 text-white">
            <div>SHARES</div>
            <div>0.00</div>
          </div>
          <div className="flex flex-row justify-between align-middle px-2 text-white">
            <div>POTENTIAL RETURN</div>
            <div>$0.00 (0.00%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
