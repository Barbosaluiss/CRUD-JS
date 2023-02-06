const Products = require("./Products");
const Suppliers = require("./Suppliers");
const Categories = require("./Categories");
const CategoryProduct = require("./CategoryProduct");

Products.belongsTo(Suppliers, {
    foreignKey: 'supplier_id',
});

Suppliers.hasMany(Products, {
    foreignKey: 'supplier_id',
});

Products.belongsToMany(Categories, {
    foreignKey: "product_id",
    through: CategoryProduct,
});

Categories.belongsToMany(Products, {
    foreignKey: "category_id",
    through: CategoryProduct,
});

module.exports = {
    Products,
    Suppliers, 
    Categories,
};