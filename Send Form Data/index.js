/* Topic: Send data from body (JSON data, form data)
=========================================================*/

const express = require('express')
const app = express()
const PORT = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// // Postman JSON
// app.post("/user", (req, res) => {
//     const name = req.body.name
//     const age = req.body.age
//     res.send(`Welcome ${name} and age is ${age}`)
// })

// Form
app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/register", (req, res) => {
    const fullName = req.body.fullName
    const age = req.body.age
   res.send(`Name: ${fullName} & Age: ${age}`)
})


app.listen(PORT, (req, res) => {
    console.log(`Server http://localhost:${PORT}`)
})