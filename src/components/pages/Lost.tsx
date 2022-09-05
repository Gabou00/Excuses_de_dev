import React, { useEffect } from 'react'
import "./Lost.css"
import logo from '../img/lost.gif'
import { useNavigate } from 'react-router-dom'

function Lost() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }, [])
  
    return (
      <div className="Lost">
        <p>I'm lost</p>
        <img src={logo} alt="Help..." title="Mais où suis-je ?"/>
      </div>
    );
  }

export default Lost;
