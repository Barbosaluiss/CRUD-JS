module.exports = (req, res, next)=>{
    const {pass} = req.query;

    if(!pass || pass !== "123"){
        return res.status(400).json("Access Denied!");
    };

    next();
};