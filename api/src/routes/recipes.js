const { Router } = require("express");
const { getAllData } = require("../helper/ApiDbData");
const { TypeOfDiet } = require("../db");
const { Recipe } = require("../db");

const router = Router();

// GET /recipes?name="...":
//
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado

router.get("/", async (req, res) => {
  const { name } = req.query;

  const allRecipes = await getAllData();
  if (name) {
    let recipesFind =
      allRecipes.length &&
      allRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(name.toLowerCase())
      );
    recipesFind.length
      ? res.status(200).json(recipesFind)
      : res.status(404).send(`No se encontro ${name}`);
  } else {
    res.status(200).json(allRecipes);
  }
});

//  GET /recipes/{idReceta}:
//
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const infoRecipes = await getAllData();
  const recipe =
    infoRecipes.length &&
    infoRecipes.filter((recipe) => String(recipe.id) === String(id));
  recipe.length
    ? res.status(200).json(recipe)
    : res.status(404).send(`No se encontro recetas con el id:${id}`);
});

module.exports = router;
