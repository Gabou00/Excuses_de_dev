import React, { useEffect } from 'react'
import "./Lost.css"
import logo from '../img/lost.gif'
import { useNavigate } from 'react-router-dom'

// définiton de la fonction Lost
function Lost() {
  const navigate = useNavigate()

// fonction de redirection de page après un délai de 5s
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }, [])
  
  // renvoi du résultat sur la page
    return (
      <div className="Lost">
        <p>I'm lost</p>
        <img src={logo} alt="Help..." title="Mais où suis-je ?"/>
      </div>
    );
  }

export default Lost;
