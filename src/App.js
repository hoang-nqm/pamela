import React, { useEffect } from "react";
import Typed from "typed.js";
import "./App.css";

import Home from "./page/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Skincare1 from "./page/Skincare";

import Skincare2 from "./page/Skincare2";
import Skincare3 from "./page/Skincare3";

function App() {
  return (
    <Router>
      {/* Wrap the whole app with <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/skincare1" element={<Skincare1 />} />
        <Route path="/skincare2" element={<Skincare2 />} />
        <Route path="/skincare3" element={<Skincare3 />} />
      </Routes>
    </Router>
  );
}

export default App;
