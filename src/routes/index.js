const express = require("express");
const product = require("../controllers/product");
const suppliers = require("../controllers/suppliers");

const routes = express.Router();

routes.get("/products", product.$list);
routes.post("/products", product.$register);
routes.delete("/products/:id", product.$delete);
routes.put("/products/:id", product.$update);

routes.get("/suppliers", suppliers.$list);
routes.post("/suppliers", suppliers.$register);

module.exports = routes;