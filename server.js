const express = require('express');
const drinks = require('./models/drinks');
const fruits = require('./models/drinks');
const port = 3000;

const app = express();


app.get('/', (req, res)=> {
    res.send("Welcome to the Gitpub app")

})
app.get('/drinks', (req, res)=> {
    res.send(drinks)

})

app.listen(port, () => {
    console.log("Server is running")
})

