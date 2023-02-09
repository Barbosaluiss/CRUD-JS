const {Users} = require("../models/index");
const bcrypt = require("bcryptjs");

const user = {
    async $register(req, res){
        try {
            const {user_name, email, pass} = req.body;
            const newPass = bcrypt.hashSync(pass, 10);
            const newUser = await Users.create({
                user_name,
                email,
                pass: newPass,   
            });

            res.status(201).json(newUser);
        } catch (error) {
            return res.status(401).json("Failure when try to register a user!");
        };
    },

    async $list(req, res){
        try {
            const allUsers = await Users.findAll();

            res.status(200).json(allUsers);
        } catch (error) {
            return res.status(404).json("No registered users!");
        };
    },
};

module.exports = user;