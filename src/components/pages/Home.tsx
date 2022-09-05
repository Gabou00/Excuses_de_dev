import React from "react";
import { useEffect } from "react"
import Button from "../assets/button";
import "./Home.css"

function Home() {
    return (
      <div className="Home">
        <p>Ma super application</p>
        <div className="bouton"><Button/></div>
      </div>
    );
  }

export default Home;
