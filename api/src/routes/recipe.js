const { Router } = require("express");

const { Recipe, TypeOfDiet } = require("../db");

const router = Router();

router.post("/", async (req, res, next) => {
  const { name, summary, score, healthScore, steps, dbCreated, typeOfDiet } =
    req.body;

  if (!name && !summary)
    return res.status(400).send("Please insert required fields to continue");

  try {
    const newRecipe = await Recipe.create({
      name,
      summary,
      score,
      healthScore,
      steps,
      dbCreated,
    });

    const typeDb = await TypeOfDiet.findAll({
      where: { name: typeOfDiet },
    });

    newRecipe.addTypeOfDiet(typeDb);

    res.status(200).send("Receta creada exitosamente");
  } catch (e) {
    next(e);
  }
});

module.exports = router;
