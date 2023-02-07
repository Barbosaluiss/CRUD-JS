const {Users} = require("../models/index");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

const authenticate = {  
    async $login(req, res){
        try {
            const {email, pass} = req.body;
            const user = await Users.findOne({
                where: {
                    email,
                },
            });

            if(!user){
                return res.status(400).json("User not found!");
            };

            if(bcrypt.compareSync(pass, user.pass)){
                return res.status(401).json("Invalid Password!");
            };

            return res.json("Successfully login");
        } catch (error) {
            return res.status(500).json("[ERROR]!");
        };
    },
};

module.exports = authenticate;