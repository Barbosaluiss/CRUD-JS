const Sequelize = require("sequelize");

const DB_NAME = '';
const DB_USER = '';
const DB_PASS = ''
const DB_CONFIG = {
    dialect: '',
    host: '',
    port: ''
};

let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error('Error when trying to connect to DB');
};

async function hasConnection(){
    try {
        await db.authenticate();
        console.log("DB connected...")
    } catch (error) {
        console.error("Error when trying to connect to DB");
    };
};

Object.assign(db, {
    hasConnection,
});

module.exports = db;