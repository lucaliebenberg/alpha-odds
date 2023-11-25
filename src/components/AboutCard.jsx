import React from "react";

const AboutCard = () => {
  return (
    <div className="w-[34vw] h-[50.8vh] top-[90px] bg-transparent text-whte border border-white">
      {/* Top section  */}
      <div>
        <p>ALPHA ODDS WINS THE CELO DEFI HACKATHON</p>
        <div>
          <p>BUY</p>
          <hr />
        </div>

        {/* Outcome section  */}
        <div>
          <p>OUTCOME</p>
          <div className="flex flex-row justify-center align-middle px-4">
            <button className="w-[141px] h-[36px] border border-white rounded-[10px]">
              YES
            </button>
            <button className="w-[141px] h-[36px] border border-white rounded-[10px]">
              NO
            </button>
          </div>
        </div>

        {/* Amount section  */}
        <div>
          <p>AMOUNT</p>
          <div className="w-full">
            <button>0$</button>
          </div>
          <div className="w-full">
            <button>BUY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
