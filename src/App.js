import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact="true" path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
