require("dotenv").config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const dbConnect = require('./server/config/db');
const methodOR = require('method-override');
const app = express();
const PORT = 3000;

// Connecting to database;
dbConnect();

// Engine Template;
app.use(expressLayouts);
app.set('layout', './layouts/main.ejs');
app.set('view engine', 'ejs');

// Using Method Override;
app.use(methodOR('_method'));

// Adding the main routes;
app.use('/', require('./server/routes/main'));

// Adding the public file;
app.use(express.static('./public'));

// Add book Pages;
app.get('/add-book', (req, res) => {
    res.render('add-book', {title : 'Add-Book'});
})

// 404 Page;
app.use((req, res) => {
    res.render('404', {title : "Error! 404"});
});


// Server Connection;
app.listen(PORT, () => {
    console.log("Connected to the Server");
});

