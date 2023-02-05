const db = require("../database/index")
const { DataTypes } = require("sequelize")
const Fabricante = require("./Fabricante")

const Produtos = db.define("Produtos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,   
    },

    nome:{
        type: DataTypes.STRING,
    },

    preco: {
        type: DataTypes.FLOAT,
    },

    quantidade: {
        type: DataTypes.INTEGER,
    },

    fabricante_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Fabricante,
            key: 'id'
        }
    },

    createdAt: {
        type: DataTypes.DATE,
    },
    
    updatedAt: {
        type: DataTypes.DATE,
    },

}, {
    tableName: "produto",

})

module.exports = Produtos