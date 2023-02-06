const Categories = require("../models/Categories");

const category = {
    async $list(req, res){
        const allCategories = await Categories.findAll();

        res.json(allCategories);
    },

    async $register(req, res){
        const {category_name} = req.body;

        const newCategory = await Categories.create({
            category_name,
        });

        res.json(newCategory);
    },

    
};

module.exports = category;