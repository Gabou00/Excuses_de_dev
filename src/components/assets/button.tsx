import { useState, useEffect } from "react";
import "./button.css";

// Variable du serveur JSON
const url = "http://localhost:3005/messages";

// Définition de la fonction Button qui récupère de manière aléatoire le "message" d'excuse contenu dans notre base de donnée db.json.
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
  
// valeur renvoyée lors du clique sur le bouton
  return (
    <div className="divButton">
      <p>{quote}</p>
      <button className="button" onClick={() => setIsSending(true)}>Cliquer ici</button>
    </div>
  );
}

export default Button;
