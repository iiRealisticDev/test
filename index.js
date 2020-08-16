const express = require("express");
const app = express();
const port = process.env.port || 3000
app.listen(3000);

app.get("/",(req,res) => {
    res.send("fuck OFF. <3")
})