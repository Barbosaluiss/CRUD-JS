const Products = require("./Products");
const Suppliers = require("./Suppliers");

Products.belongsTo(Suppliers, {
    foreignKey: 'supplier_id',
});

Suppliers.hasMany(Products, {
    foreignKey: 'supplier_id',
});

module.exports = {
    Products,
    Suppliers, 
};