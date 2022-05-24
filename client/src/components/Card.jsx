import { React } from "react";

//esta seria la carta de cada receta con los detalles pedidos

export default function Card(name, tipeOfDiet, img) {
  return (
    <div>
      <h2>{name}</h2>
      <h5>{tipeOfDiet}</h5>
      <img src={img} alt="Image Not Found" />
    </div>
  );
}
