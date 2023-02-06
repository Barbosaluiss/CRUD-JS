const Suppliers = require("../models/Suppliers");

const suppliers = {
    async $list(req, res){
       const allSuppliers = await Suppliers.findAll();

       res.json(allSuppliers);
    },

    async $register(req, res){
        const {supplier_name} = req.body;

        const newSupplier = await Suppliers.create({
            supplier_name,
        });

        res.json(newSupplier); 
    },
};

module.exports = suppliers;