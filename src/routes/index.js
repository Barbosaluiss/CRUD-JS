const express = require("express");
const product = require("../controllers/product");
const supplier = require("../controllers/supplier");

const routes = express.Router();

routes.get("/products", product.$list);
routes.post("/products", product.$register);
routes.delete("/products/:id", product.$delete);
routes.put("/products/:id", product.$update);

routes.get("/suppliers", supplier.$list);
routes.post("/suppliers", supplier.$register);
routes.put("/suppliers/:id", supplier.$update); 

module.exports = routes;