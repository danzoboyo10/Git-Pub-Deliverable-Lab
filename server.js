const express = require('express');
const drinks = require('./models/drinks');
const food = require('./models/food');
const port = 3000;

const app = express();


app.get('/', (req, res)=> {
    res.send("Welcome to the Gitpub app")

})
//index drinks
app.get('/drinks/', (req, res)=> {
    res.render('drinks_index.ejs', {allDrinks: drinks})


})

//index food
app.get('/food/', (req, res)=> {
    res.render('food_index.ejs', {allFood: food})
})

//show drinks
app.get('/drinks/:id/', (req, res)=> {
    res.render('drinks_show.ejs', {
        allDrinks : drinks[req.params.id]
    })

})
//show food
app.get('/food/:id/', (req, res)=> {
    res.render('food_show.ejs', {
        allFood : food[req.params.id]
    })

})

app.listen(port, () => {
    console.log("Server is running")
})

