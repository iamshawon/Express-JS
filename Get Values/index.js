const express = require('express');
const app = express();
const PORT = 3000;

/* Header: use
=========================================================================*/
app.get("/", (req, res) => {
    const id = req.header('id')           
    const name = req.header('name')    
    res.send(`${name}'s id is => ${id}`)
})

/* Query Parameter: use http://localhost:3000/?id=10001&name=Shawon
=========================================================================
app.get("/", (req, res) => {
    const id = req.query.id           
    const name = req.query.name       
    res.send(`${name}'s id is = ${id}`)
})
*/

/* Route Parameter: use http://localhost:3000/userId/101/userAge/25
=========================================================================
app.get("/userId/:id/userAge/:age", (req, res) => {
    const id = req.params.id           
    const age = req.params.age       
    res.send(`${id}'s age is = ${age}`)
})
*/



app.listen(PORT, (req, res) => {
    console.log(`Server is Running at http://localhost:${PORT}`)
})