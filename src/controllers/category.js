const Categories = require("../models/Categories");

const category = {
    async $list(req, res){
        try {
        const allCategories = await Categories.findAll();

        res.json(allCategories);
        } catch (error) {
            return res.status(500).json("[ERROR]!");    
        };
    },

    async $register(req, res){
       try {
        const {category_name} = req.body;

        const newCategory = await Categories.create({
            category_name,
        });

        res.json(newCategory);
       } catch (error) {
        return res.status(500).json("[ERROR]");
       };
    },
};

module.exports = category;