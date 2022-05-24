const { DataTypes } = require('sequelize');


//[ ] Tipo de dieta con las siguientes propiedades:
//ID
//Nombre



module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('TypeOfDiet', {
        // id: {
        //     type:DataTypes.UUID,
        //     primaryKey: true
        // },
        name: {
            type: DataTypes.STRING,
            unique: true
        }
    })
}