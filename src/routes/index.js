const express = require("express")
const Products = require("../controllers/Products")

const routes = express.Router()

routes.get("/list/products", Products.list)
routes.post("/product", Products.register)


module.exports = routes