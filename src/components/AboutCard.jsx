import React, { useState, useEffect } from "react";

const AboutCard = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [number, setNumber] = useState("");

  const [sharesAmount, setSharesAmount] = useState(0);
  const [avgPrice, setAvgPrice] = useState(0);
  const [shares, setShares] = useState(0);
  const [potentialReturn, setPotentialReturn] = useState(0);

  const contractAddress = "0x600d953465bbff8ec2e1d6dc251b1365bd109de7";

  useEffect(() => {
    const contractABI = [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "_outcome",
            type: "bool",
          },
        ],
        name: "buyShares",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "_endTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_price",
            type: "uint256",
          },
        ],
        name: "createContract",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "_outcome",
            type: "bool",
          },
        ],
        name: "resolveContract",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
        ],
        name: "getContract",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "string",
            name: "",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ];

    if (web3) {
      console.log("Web3 is initialized");

      const myContract = new web3.eth.Contract(contractABI, contractAddress);
      setContract(myContract);
      console.log(setWeb3());
    }
  }, [web3, contractAddress]);

  const handleBuyShares = async (index, outcome) => {
    try {
      const amountInWei = web3.utils.toWei(sharesAmount.toString(), "ether");

      const accounts = await web3.eth.getAccounts();
      const fromAccount = accounts[0];

      const tx = await contract.methods.buyShares(index, outcome).send({
        from: fromAccount,
        value: amountInWei,
      });

      //   handle avg price, share price & potential return value
      const newAvgPrice = 123.45; // replace with the actual value
      const newShares = 10; // replace with the actual value
      const newPotentialReturn = 567.89; // replace with the actual value

      setAvgPrice(newAvgPrice);
      setShares(newShares);
      setPotentialReturn(newPotentialReturn);
      console.log(setSharesAmount());

      console.log(`Bought ${sharesAmount} shares of outcome ${outcome}`);
      console.log("Transaction Hash:", tx.transactionHash);
    } catch (error) {
      console.error("Error buying shares:", error);
    }
  };

  //   const handleSharesAmountChange = (event) => {
  //     const inputShares = Number(event.target.value);
  //     setSharesAmount(inputShares);

  //     // Calculate and update potential return based on the current average price
  //     const newPotentialReturn = inputShares * avgPrice;
  //     setPotentialReturn(newPotentialReturn);
  //   };

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
            <button
              className="w-[141px] h-[36px] border border-white rounded-[10px] pt-2  hover:bg-purple-900 hover:text-white hover:font-bold transition-all ease-in-out hover:border-none"
              onClick={() => handleBuyShares(0, true)}
            >
              <span>YES</span>
            </button>
            <button
              className="w-[141px] h-[36px] border border-white rounded-[10px] pt-2  hover:bg-purple-900 hover:text-white hover:font-bold transition-all ease-in-out hover:border-none"
              onClick={() => handleBuyShares(0, false)}
            >
              <span>NO</span>
            </button>
          </div>
        </div>

        {/* Amount section  */}
        <div className="p-1">
          <p className="mt-2 mb-2">AMOUNT</p>
          <div className="w-full flex justify-center align-middle mt-4 mb-4">
            {/* <button className=" border border-white rounded-[10px] w-[90%]">
              0$
            </button> */}
            <input
              type="number"
              className="bg-transparent border border-white text-white placeholder-white rounded-[10px] w-[90%] p-2"
              placeholder="Enter Amount"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-center align-middle">
            <button
              className=" border border-white rounded-[10px] w-[90%] hover:bg-purple-900 hover:text-white hover:font-bold transition-all ease-in-out hover:border-none"
              onClick={() => handleBuyShares(true)}
            >
              BUY
            </button>
          </div>
        </div>

        {/* Summary titles */}
        <div className="mt-6 mb-2">
          <div className="flex flex-row justify-between align-middle px-2 text-white">
            <div>AVG PRICE</div>
            <div>{avgPrice}</div>
          </div>
          <div className="flex flex-row justify-between align-middle px-2 text-white">
            <div>SHARES</div>
            <div>{shares}</div>
          </div>
          <div className="flex flex-row justify-between align-middle px-2 text-white">
            <div>POTENTIAL RETURN</div>
            <div>{`$${potentialReturn.toFixed(2)} (${(
              (potentialReturn / (sharesAmount * avgPrice)) *
              100
            ).toFixed(2)}%)`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
