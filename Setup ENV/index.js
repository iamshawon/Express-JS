const express = require('express');
const app = express();

// dot env
require('dotenv').config();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send(`Home Page`)
})

app.listen(PORT, (req, res) => {
    console.log(`Server is Running at http://localhost:${PORT}`)
})