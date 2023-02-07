const {Suppliers, Products} = require("../models/index");

const supplier = {
    async $list(req, res){
       try {
        const allSuppliers = await Suppliers.findAll();

       res.json(allSuppliers);
       } catch (error) {
        return res.status(500).json("[ERROR]!");
       };
    },

    async $register(req, res){
        try {
        const {supplier_name} = req.body;

        const newSupplier = await Suppliers.create({
            supplier_name,
        });

        res.json(newSupplier); 
        } catch (error) {
            return res.status(500).json("[ERROR]!");    
        };
    },

    async $update(req, res){
        try {
        const {id} = req.params;
        const {supplier_name} = req.body;

        if(!id) return res.status(401).json("Missing ID!");

        await update({
            supplier_name,
        }, {
            where: {
                id, 
            },
        });

        res.json("Updated supplier!");
        } catch (error) {
            return res.status(500).json("[ERROR]!");    
        };
    },
};

module.exports = supplier;