const db = require("../database/index");
const {DataTypes} = require("sequelize");

const Products = db.define("Products", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    product_name: {
        type: DataTypes.STRING,
    },

    price: {
        type: DataTypes.FLOAT,
    },

    quantity: {
        type: DataTypes.INTEGER,
    },

    createdAt: {
        type: DataTypes.DATE,
    },

    updatedAt: {
        type: DataTypes.DATE,
    },
}, {
    tableName: 'products',
});

module.exports = Products;