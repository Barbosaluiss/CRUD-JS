const express = require("express");
const product = require("../controllers/product");
const supplier = require("../controllers/supplier");
const category = require("../controllers/category");
const block = require("../middlewares/block");

const routes = express.Router();

routes.get("/products", block, product.$list);
routes.post("/products", product.$register);
routes.delete("/products/:id", product.$delete);
routes.put("/products/:id", product.$update);

routes.get("/suppliers", supplier.$list);
routes.post("/suppliers", supplier.$register);
routes.put("/suppliers/:id", supplier.$update); 

routes.get("/categories", category.$list);
routes.post("/categories", category.$register);

module.exports = routes;