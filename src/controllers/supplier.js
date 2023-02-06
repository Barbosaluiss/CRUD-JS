const {Suppliers, Products} = require("../models/index");

const supplier = {
    async $list(req, res){
       const allSuppliers = await Suppliers.findAll({
            include: Products,
       });

       res.json(allSuppliers);
    },

    async $register(req, res){
        const {supplier_name} = req.body;

        const newSupplier = await Suppliers.create({
            supplier_name,
        });

        res.json(newSupplier); 
    },

    async $update(req, res){
        const {id} = req.params;
        const {supplier_name} = req.body;

        await update({
            supplier_name,
        }, {
            where: {
                id, 
            },
        });

        res.json("Updated supplier!");
    },
};

module.exports = supplier;