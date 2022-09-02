// import React from "react";
// import "./button.css";

// function Button() {
//   return (
//     <div>
//       <button className="button" onClick={this.sayHello}>Cliquer ici</button>
//     </div>
//   );
// }

// export default Button;
// _______________________________________________________________________________ \\

import "./button.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./button.css";

function Button() {
  const shoot = (a: any) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot</button>
  );
}

  const rootElement = document.getElementById("root");
  ReactDOM.render(<Button />, rootElement);

export default Button;