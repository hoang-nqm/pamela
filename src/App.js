import React, { useEffect } from "react";
import Typed from "typed.js";
import "./App.css";

import Home from "./page/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Page1 from "./page/Page1";
import Page2 from "./page/page2";

function App() {
  return (
    <Router>
  
      {/* Wrap the whole app with <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />

      </Routes>
    </Router>
  );
}

export default App;
