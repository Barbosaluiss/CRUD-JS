const db = require("../database/index")
const {DataTypes} = require("sequelize")

const Fabricante = db.define("Fabricante", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true   
    },

    nome: {
        type: DataTypes.STRING
    },

    createdAt: {
        type: DataTypes.DATE
    },

    updatedAt: {
        type: DataTypes.DATE
    }
}, {
    tablename: 'fabricante'
})

module.exports = Fabricante