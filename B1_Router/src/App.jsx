import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Navbar from "./page/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
