
const express = require("express");

const app = express();

app.get("/", (req,res) => {

    res.send("GOOGLE");
});

app.listen(3001);