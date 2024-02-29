const express = require('express');
const router = express.Router();
const Book = require('../model/book');

// URL Encoder;
router.use(express.urlencoded({extended : true}));

// Viewing data from database
router.get('/', (req, res) => {    
    Book.find()
        .then((result) => {
            res.render('index', {title : "Home", books : result});
        })
        .catch(err => console.log(err))
});

// Getting data from form;
router.post('/', (req, res) => {
    const book = new Book(req.body);
    book.save()
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
});


module.exports = router;