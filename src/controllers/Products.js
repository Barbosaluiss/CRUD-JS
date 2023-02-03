const Produtos = require("../models/Produtos")

const Products = {
    async list(req, res){
        const lista = await Produtos.findAll()

        res.json(lista)
    },

    async register(req, res){
        const { nome, preco, quantidade } = req.body
        
        const novoProduto = await Produtos.create({
            nome, 
            preco,
            quantidade, 
        })
        res.json(novoProduto)
    }
}

module.exports = Products