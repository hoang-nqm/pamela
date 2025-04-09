import React, { useEffect } from "react";
import Typed from "typed.js";
import "./App.css";

import Home from "./page/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./page/Login";

function App() {
  return (
    <Router>
  
      {/* Wrap the whole app with <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
