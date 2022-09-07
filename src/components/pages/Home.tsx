// imports nécessaires
import Button from "../assets/button";
import "./Home.css"

// Fonction de mon composant principal qui appelle le sous-composant <Button>
function Home() {
    return (
      <div className="Home">
        <h4 className="title">Ma super application</h4>
        <div className="bouton"><Button/></div>
      </div>
    );
  }

export default Home;
