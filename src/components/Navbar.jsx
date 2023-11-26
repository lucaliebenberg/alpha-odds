import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { connectWallet, getCurrentWalletConnected } from "../utils/interact";

const Navbar = () => {
  const [walletAddress, setWallet] = useState("");
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    async function fetchData() {
      const { address } = await getCurrentWalletConnected();
      setWallet(address);
    }
    fetchData();
    addWalletListener();
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setWallet(walletResponse.address);
  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
        } else {
          setWallet("");
        }
      });
    } else {
    }
  }

  return (
    <div className="w-full h-[90px] bg-purple-500">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <a href="/">
          <div className="flex flex-row hover:cursor-pointer">
            <h1 className="text-white tracking-wide">ALPHA ODDS</h1>
          </div>
        </a>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            <a href="#platform" className="hidden">
              <li className="hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out">
                Platform
              </li>
            </a>
            <a href="#developers" className="hidden">
              <li className="hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out">
                Developers
              </li>
            </a>
            <a href="#community" className="hidden">
              <li className="hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out">
                Community
              </li>
            </a>

            <button
              id="walletButton"
              className="ml-4 hover:scale-105 duration-300 ease-in-out bg-purple-900"
              onClick={connectWalletPressed}
            >
              {walletAddress.length > 0 ? (
                "Connected: " +
                String(walletAddress).substring(0, 6) +
                "..." +
                String(walletAddress).substring(38)
              ) : (
                <span>Connect Wallet</span>
              )}
            </button>

            {/* <button className="ml-4 hover:scale-105 duration-300 ease-in-out">
              Connect your wallet
            </button> */}
          </ul>
        </div>

        {/* Hamburger menu */}
        <div
          onClick={handleNav}
          className="block md:hidden hover:cursor-pointer"
        >
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[100px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <a href="#platform" className="hidden">
              <li className="text-2xl">Platform</li>
            </a>
            <a href="#developers" className="hidden">
              <li className="text-2xl">Developers</li>
            </a>
            <a href="#community" className="hidden">
              <li className="text-2xl">Community</li>
            </a>
            <button
              className="m-8 hover:scale-105 duration-300 ease-in-out"
              onClick={connectWalletPressed}
            >
              {walletAddress.length > 0 ? (
                "Connected: " +
                String(walletAddress).substring(0, 6) +
                "..." +
                String(walletAddress).substring(38)
              ) : (
                <span>Connect Wallet</span>
              )}
            </button>

            {/* <button className="m-8 hover:scale-105 duration-300 ease-in-out">
              Connect your wallet
            </button> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
