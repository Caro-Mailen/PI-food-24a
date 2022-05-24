const axios = require("axios");
require("dotenv").config();
const { API_KEY, URL } = process.env;
const { Recipe, TypeOfDiet } = require("../db");
const dataFake = require("./mockData");

const getApiData = async () => {
  const apiURL = `${URL}${API_KEY}`;
  const {
    data: { results: foodData },
  } = await axios.get(apiURL);
  // const foodData = dataFake.results;
  const food =
    foodData.length &&
    foodData.map(
      ({
        id,
        image,
        title,
        diets,
        spoonacularScore,
        dishTypes,
        summary,
        healthScore,
        analyzedInstructions,
      }) => ({
        //q retorne solo la informacion q quiero de la forma q yo confiduro
        id,
        img: image,
        name: title,
        typeOfDiet: diets, // un array con los tipos de dieta de esa receta
        score: spoonacularScore, // puntuacion
        dishTypes: dishTypes, // tipo de plato
        summary: summary, // un resumen del plato
        healthScore: healthScore, // que tan saludable es
        steps: analyzedInstructions, // el paso a paso de como se hace
      })
    );
  return food.length ? food : [];
};

const getDbData = async () => {
  return await Recipe.findAll({
    include: {
      model: TypeOfDiet,
      attributes: ["name"],
    },
  });
};

const getAllData = async () => {
  const apiData = await getApiData();
  const dbData = await getDbData();
  return [...apiData, ...dbData];
};

module.exports = {
  getAllData,
};
