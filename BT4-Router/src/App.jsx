import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./component/Home";
import Login from "./component/Login";
import NotFound from "./component/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
