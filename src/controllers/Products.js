const Products = {
    list(req, res){
        res.json([{"nome": "produto1"}, {"nome": "produto2"}])
    },

    register(req, res){
        console.log(req.body)

        res.json(req.body)
    }
}

module.exports = Products