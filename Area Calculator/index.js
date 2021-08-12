const express = require('express')
const app = express()
const PORT = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.get("/circle", (req, res) => {
    res.sendFile(__dirname + "/circle.html")
})
app.post("/circle", (req, res) => {
    const radius = req.body.radius
    const area = Math.PI * radius * radius

    res.send(`<h2>Area of Circle is = ${area}</h2>`)
})

app.get("/triangle", (req, res) => {
    res.sendFile(__dirname + "/triangle.html")
})
app.post("/triangle", (req, res) => {
    const base = req.body.base
    const height = req.body.height
    const area = 0.5 * base * height

    res.send(`<h2>Area of Triangle is = ${area}</h2>`)
    
})


// Server
app.listen(PORT, (req, res) => {
    console.log(`Server http://localhost:${PORT}`)
})