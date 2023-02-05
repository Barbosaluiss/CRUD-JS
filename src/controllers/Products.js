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
    },

    async delete(req, res){
        const {id} = req.params

        await Produtos.destroy({
            where:{
                id
            }
        })

        res.json("Produto deletado!")
    },

    async $update(req, res){
        const {id} = req.params
        const {nome, preco, quantidade} = req.body

        const updateProduct = await Produtos.update({
            nome,
            preco,
            quantidade
        }, {
            where: {
                id
            }
        })

        res.json("Produto atualizado!")
    }
}

module.exports = Products