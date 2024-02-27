const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const books = [{title : 'Harry potter', author : "JK Rawling", pages : 300, read : true}]
    res.render('index', {title : "Home", books});
})

module.exports = router;