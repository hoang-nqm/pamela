import React, { useEffect } from "react";
import Typed from "typed.js";
import "./App.css";

import Home from "./page/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Skincare1 from "./page/Skincare";

import Skincare2 from "./page/Skincare2";
import Skincare3 from "./page/Skincare3";
import Skincare4 from "./page/Skincare4";
import Skincare5 from "./page/Skincare5";
import Makeup1 from "./page/Makeup1";
import Makeup2 from "./page/Makeup2";
import Makeup3 from "./page/Makeup3";
import Makeup4 from "./page/Makeup4";

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
        <Route path="/skincare4" element={<Skincare4 />} />
        <Route path="/skincare5" element={<Skincare5 />} />
        <Route path="/makeup1" element={<Makeup1 />} />
        <Route path="/makeup2" element={<Makeup2 />} />
        <Route path="/makeup3" element={<Makeup3 />} />
        <Route path="/makeup4" element={<Makeup4 />} />
      </Routes>
    </Router>
  );
}

export default App;
