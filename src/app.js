const express = require("express");
const routes = require("./routes/index");
const db = require("./database/index");
const handleError = require("./middlewares/handleError");

const app = express();

db.hasConnection();

app.use(express.json());
app.use(routes);
app.use(handleError);

app.listen("3000", ()=>{
    console.log("Server running at port 3000...");
});