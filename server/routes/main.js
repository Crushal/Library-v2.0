const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const books = [];
    res.render('index', {title : "Home", books});
})

module.exports = router;