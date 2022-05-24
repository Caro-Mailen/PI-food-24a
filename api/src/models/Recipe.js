const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


//Receta con las siguientes propiedades:
//ID: *
//Nombre *
//Resumen del plato *
//Puntuación
//Nivel de "comida saludable"
//Paso a paso

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER
    },
    healthScore: {
      type: DataTypes.FLOAT,
      // get() {
      //   return `${this.getDataValue('nivel')} de 'comida saludable'`
      // }
    },
    steps: {
      type: DataTypes.TEXT
    },
    dbCreated: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};
