import { createContext, useContext, useState } from "react";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [web3, setWeb3] = useState(null);

  const updateWallet = (address, web3Instance) => {
    setWalletAddress(address);
    setWeb3(web3Instance);
  };

  return (
    <WalletContext.Provider value={{ walletAddress, web3, updateWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  return useContext(WalletContext);
};
