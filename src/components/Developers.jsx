import React from "react";

import terminal from "../assets/terminal.png";

const Developers = () => {
  return (
    <div className="w-full text-white bg-black pt-[50px]" id="developers">
      <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex">
        <div>
          <h1>Superpowers for DeFi developers.</h1>
          <p>
            Checkout the{" "}
            <span className="text-[var(--primary-blue)]">documentation</span>,
            the <span className="text-[var(--primary-blue)]">quick start </span>
            or a guide below to integrate your porject with thousands of tokens
            and billions of liquidity
          </p>
        </div>
        <div className="flex justify-center w-full">
          <img
            className="max-w-[250px] shadow-lg shadow-cyan-500/50"
            src={terminal}
            alt="terminal"
          />
        </div>
      </div>
    </div>
  );
};

export default Developers;
