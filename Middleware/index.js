const express = require('express');
const app = express();
const PORT = 3000;

const myMiddleware = (req, res, next) => {
    console.log(`Middleware Function`);
    req.currentTime = new Date(Date.now())
    next();
}

app.use(myMiddleware)

app.get("/", myMiddleware, (req, res) => {
    console.log(`Home Page | ${req.currentTime}`)
    res.send(`Home Page `);
})

app.get("/about", (req, res) => {
    console.log(`About | ${req.currentTime}`)
    res.send(`About Page`);
})

app.listen(PORT, (req, res) => {
    console.log(`Server is Running at http://localhost:${PORT}`)
})
