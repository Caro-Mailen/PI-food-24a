import React from "react";
import { Link } from "react-router-dom";

// Pagina inicial: deben armar una landing page con

// [ ] Alguna imagen de fondo representativa al proyecto
// [ ] Botón para ingresar al home (Ruta principal)

export default function landingPage() {
  return (
    <div>
      <h1>Welcome to mi FOOD PAGE</h1>
      <Link to="/home">
        <button>Entry</button>
      </Link>
    </div>
  );
}

//direccion de imagen para fodo:
//(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lNPArGZhKnzyNgNLIhhMx8BglurwimvECQ&usqp=CAU)
