const { Router } = require("express");
const { diets } = require("../helper/diets");
const { TypeOfDiet } = require("../db");

const router = Router();

// [ ] GET /types:

// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno,
//deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá

router.get("/", async (req, res) => {
  diets.forEach((diet) => {
    TypeOfDiet.findOrCreate({
      where: { name: diet.name },
    });
  });

  const allTypes = await TypeOfDiet.findAll();

  const allDietsTypes = allTypes.map((diet) => diet.name);

  res.status(200).json(allDietsTypes);
});

module.exports = router;
