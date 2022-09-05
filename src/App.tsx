import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Button from "./components/assets/button";
import Home from "./components/pages/Home";
import Lost from "./components/pages/Lost";
import Error from "./components/pages/Error";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lost" element={<Lost />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </div>
  );
}

export default App;
