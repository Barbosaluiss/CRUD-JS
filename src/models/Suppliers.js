const db = require("../database/index");
const {DataTypes} = require("sequelize");

const Suppliers = db.define("Suppliers", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    supplier_name: {
        type: DataTypes.STRING,
    },

    createdAt: {
        type: DataTypes.DATE,
    },

    updatedAt: {
        type: DataTypes.DATE,
    },
}, {
    tableName: 'suppliers',
});

module.exports = Suppliers; 