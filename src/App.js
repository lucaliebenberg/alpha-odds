import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { WalletProvider } from "./components/WalletContext";

function App() {
  return (
    <BrowserRouter>
      <WalletProvider>
        <Navbar />
        <Routes>
          <Route exact="true" path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </WalletProvider>
    </BrowserRouter>
  );
}

export default App;
