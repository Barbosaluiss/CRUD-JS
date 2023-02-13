const {Users} = require("../models/index");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const secret = require("../configs/secret");

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

            if(!bcrypt.compareSync(pass, user.pass)){
                return res.status(401).json("Invalid Password!");
            };

            const token = JWT.sign({
                id: user.id,
                email: user.email,
                name: user.user_name,
            }, 
            secret.key);

            return res.json(token);
        } catch (error) {
            return res.status(500).json("[ERROR]!");
        };
    },
};

module.exports = authenticate;