const db = require("../database/index");
const {DataTypes} = require("sequelize");

const Users = db.define("Users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    user_name: {
        type: DataTypes.STRING,
    },

    email: {
        type: DataTypes.STRING,
    },

    pass: {
        type: DataTypes.STRING,
    },

    createdAt: {
        type: DataTypes.DATE,
    },

    updatedAt: {
        type: DataTypes.DATE,
    },
}, {
    tableName: 'users',
});

module.exports = Users; 