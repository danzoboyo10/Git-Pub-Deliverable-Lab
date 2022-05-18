const express = require('express');
const drinks = require('./models/drinks');
const port = 3000;

const app = express();


app.get('/', (req, res)=> {
    res.send("Welcome to the Gitpub app")

})
app.get('/drinks/', (req, res)=> {
    // res.send(drinks)
    // res.render('drinks_index.ejs', {allDrinks: drinks})
    res.render('drinks_show.ejs', {allDrinks: drinks})


})
app.get('/drinks/:id/', (req, res)=> {
    res.send(req.params.id)

})

app.listen(port, () => {
    console.log("Server is running")
})

