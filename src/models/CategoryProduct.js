const db = require("../database/index");
const {DataTypes} = require("sequelize");
const Products = require("./Products");
const Categories = require("./Categories");

const CategoryProduct = db.define("CategoryProduct", {
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Categories,
            key: "id",
        },
    },

    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Products,
            key: "id",
        },
    },

    createdAt: {
        type: DataTypes.DATE,
    },

    updatedAt: {
        type: DataTypes.DATE,
    },
}, {
    tableName: 'category_product',
});

module.exports = CategoryProduct;