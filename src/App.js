import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
// import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
// import { WalletProvider } from "./components/WalletContext";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact="true" path="/" element={<About />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
