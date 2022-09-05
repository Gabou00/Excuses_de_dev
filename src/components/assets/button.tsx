import { useState, useEffect } from "react";
import "./button.css";
import ReactDOM from "react-dom";

const url = "http://localhost:3005/messages";

function Button() {
  const [isSending, setIsSending] = useState(false);
  const [quote, setQuote] = useState();

  useEffect(() => {
     // Fonction setTimeout pour l'Illusion de labeur
    setTimeout(() => {
    isSending &&
    fetch(url)
    .then((response) => response.json())
    .then(data => (data[Math.floor(Math.random() * data.length)]["message "]))
    .then((quote: any) => (setQuote(quote)))
    .then(() => setIsSending(false))
  }, Math.floor(Math.random() * 4000 + 1000));
  }, [isSending]);
  

  return (
    <div>
      <p>{quote}</p>
      <button onClick={() => setIsSending(true)}>Cliquer ici</button>
    </div>
  );
}

export default Button;
