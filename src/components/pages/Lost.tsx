import React from "react";
import "./Lost.css"
import logo from '../img/lost.gif'

function Lost() {
    return (
      <div className="Lost">
        <p>I'm lost</p>
        <img src={logo} alt="Help..." title="Mais où suis-je ?"/>
      </div>
    );
  }

export default Lost;
