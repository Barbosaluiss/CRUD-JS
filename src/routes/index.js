const express = require("express");
const product = require("../controllers/product");
const supplier = require("../controllers/supplier");
const category = require("../controllers/category");
const authenticate = require("../controllers/authenticate");
const user = require("../controllers/user");
const block = require("../middlewares/block");
const userValidation = require("../validations/users/create");
const loginAuthentication = require("../validations/authentication/login");
const authentication = require("../middlewares/authentication");

const routes = express.Router();

routes.get("/products", block, product.$list);
routes.post("/products", authentication, product.$register);
routes.delete("/products/:id", product.$delete);
routes.put("/products/:id", product.$update);

routes.get("/suppliers", supplier.$list);
routes.post("/suppliers", supplier.$register);
routes.put("/suppliers/:id", supplier.$update); 

routes.get("/categories", category.$list);
routes.post("/categories", category.$register);

routes.post("/users", userValidation, user.$register);
routes.get("/users", user.$list);

routes.post("/login", loginAuthentication, authenticate.$login);

module.exports = routes;