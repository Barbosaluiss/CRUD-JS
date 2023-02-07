const {Products, Suppliers, Categories} = require("../models/index");

const product = {
    async $list(req, res){
        const allProducts = await Products.findAll({
            include: Categories, 
        });

        res.json(allProducts);
    },

    async $register(req, res){
        const {product_name, price, quantity, supplier_id, category_id} = req.body;

        const newProduct = await Products.create({
            product_name,
            price,
            quantity,
            supplier_id,
        });

        const category = await Categories.findByPk(category_id);
        await newProduct.setCategories(category);

        res.json(newProduct);
    },

    async $delete(req, res){
        const {id} = req.params;
        
        await Products.destroy({
            where: {
                id,
            },
        });

        res.json("Deleted product!");
    },
    
    async $update(req, res){
        const {id} = req.params;
        const {product_name, price, quantity} = req.body;

        await Products.update({
           product_name, 
           price,
           quantity,  
        }, {
            where: {
                id,
            },
        });

        res.json("Updated product!");
    },
};

module.exports = product; 