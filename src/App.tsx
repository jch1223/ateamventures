import React from "react";
import { Routes, Route } from "react-router-dom";

import "normalize.css";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
