require("dotenv").config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const dbConnect = require('./server/config/db');
const methodOR = require('method-override');
const Book = require('./server/model/book');
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

// url Encoder;
app.use(express.urlencoded({extended : true}));

// Adding the main routes;
app.use('/', require('./server/routes/main'));

// Adding the public file;
app.use(express.static('./public'));

// Add book page;
app.get('/add-book', (req, res) => {
    res.render('add-book', {title : 'Add-Book'});
})

// Edit book page;
app.get('/edit-book/:id', (req, res) => {
    const id = req.params.id;
    Book.findById(id)
        .then((result) => {
            res.render('edit-book', {title : "Edit-book", book : result});
        })
        .catch(err => console.log(err))
});

// Editing data:
app.put('/edit-blog/:id', (req, res) => {
    const id = req.params.id;
    Book.findByIdAndUpdate(id, {title : req.body.title, author : req.body.author, pages : req.body.pages, read : req.body.read})
        .then(() => {
            res.redirect(`/`)
        })
        .catch(err => console.log(err))
}) 

// 404 Page;
app.use((req, res) => {
    res.render('404', {title : "Error! 404"});
});


// Server Connection;
app.listen(PORT, () => {
    console.log("Connected to the Server");
});

