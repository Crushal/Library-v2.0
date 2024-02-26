const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = 3000;



// Engine Template;
app.use(expressLayouts);
app.set('layouts', './layouts/main.ejs');
app.set('view engine', 'ejs');

// Adding the main routes;
app.use('/', require('./server/routes/main'));

// 404 Page;
app.use((req, res) => {
    res.render('404', {title : "Error! 404"});
});

// Add book Pages;
app.get('/add-book', (req, res) => {
    res.render('add-book', {title : 'Add-Book'});
})

// Server Connection;
app.listen(PORT, () => {
    console.log("Connected to the Server");
});

