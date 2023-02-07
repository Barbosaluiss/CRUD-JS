const {Products, Suppliers, Categories} = require("../models/index");

const product = {
    async $list(req, res){
        try {
            const allProducts = await Products.findAll({
                include: Categories, 
            });
    
            res.json(allProducts);
        } catch (error) {
            return res.status(500).json("[ERROR]");
        };
    },

    async $register(req, res){
        try {
        const {product_name, price, quantity, supplier_id, category_id} = req.body;

        const newProduct = await Products.create({
            product_name,
            price,
            quantity,
            supplier_id,
        });

        const category = await Categories.findByPk(category_id);
        await newProduct.setCategories(category);

        res.status(201).json(newProduct);
        } catch (error) {
            return res.status(500).json("[ERROR]!");    
        };
    },

    async $delete(req, res){
        try {
            const {id} = req.params;

            if(!id) return res.status(401).json("Missing ID!");
        
        await Products.destroy({
            where: {
                id,
            },
        });

        res.status(204);
        } catch (error) {
            return res.status(500).json(`[ERROR]`);
        };
    },
    
    async $update(req, res){
        try {
        const {id} = req.params;
        const {product_name, price, quantity} = req.body;

        if(!id) return res.status(400).json("Missing ID!");

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
        } catch (error) {
            return res.status(500).json("[ERROR]!");
        };
    },
};

module.exports = product; 