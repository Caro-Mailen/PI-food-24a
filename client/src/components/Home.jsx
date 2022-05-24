import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../actions";

export default function Home() {
  const dispatch = useDispatch();

  const allRecipes = useSelector((state) => state.recipes);
  //con useSelector traigo, en la constante allRecipes, todo lo q esta en el estado de recipes

  //useEffect --> para traernos del estado las recetas cuando el componente se monta

  useEffect(() => {
    dispatch(getRecipes()); //despacho la funcion q me va a traer todas las recetas
  }, []); //como segundo parametro dentro del array le paso alguna dependencia para el el
  //componente se monte o no

  function handleClick(e) {
    e.preventDefault(); //es para q no se recargue la pagina y rompa
    dispatch(getRecipes());
  }

  return (
    <div>
      <Link to="/recipe">Crear receta</Link>
      <h1>Henry FOOD PI</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        cargar de nuevo las recetas
      </button>
      <div>
        <select>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <select>
          <option value="glFr">Gluten Free</option>
          <option value="ktg">Ketogenic</option>
          <option value="vgt">Vegetarian</option>
          <option value="lcVgt">Lacto-vegetarian</option>
          <option value="lcOVg">Lacto ovo vegetarian</option>
          <option value="vgn">Vegan</option>
          <option value="pct">Pescatarian</option>
          <option value="plt">Paleolithic</option>
          <option value="prl">Primal</option>
          <option value="w30">Whole 30</option>
        </select>
        //faltaria un select para ordenar por puntuacion
      </div>
    </div>
  );
}
