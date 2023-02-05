const Fabricante = require("./Fabricante")
const Produtos = require("./Produtos")

Produtos.belongsTo(Fabricante, {
    foreignKey: 'fabricante_id'
})

Fabricante.hasMany(Produtos, {
    foreignKey: 'fabricante_id'
})

module.exports = {
    Fabricante,
    Produtos
}