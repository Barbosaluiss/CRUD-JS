const express = require("express")
const routes = require("./routes/index")
const { json } = require("stream/consumers")

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000, ()=>{
    console.log("Server running at port 3000")
})