const db = require("../database/index");
const {DataTypes} = require("sequelize");

const Categories = db.define("Categories", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    category_name: {
        type: DataTypes.STRING,
    },

    createdAt: {
        type: DataTypes.DATE,
    },

    updatedAt: {
        type: DataTypes.DATE,
    },
}, {
    tableName: 'categories',
});

module.exports = Categories;