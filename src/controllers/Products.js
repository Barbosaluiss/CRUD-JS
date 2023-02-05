const {Produtos, Fabricante} = require("../models/index")

const Products = {
    async list(req, res){
        const lista = await Produtos.findAll({
            include: Fabricante
        })

        res.json(lista)
    },

    async register(req, res){
        const { nome, preco, quantidade, fabricante_id } = req.body
        
        const novoProduto = await Produtos.create({
            nome, 
            preco,
            quantidade, 
            fabricante_id
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