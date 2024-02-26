const express = require('express');
const app = express();

const PORT = 3000;

app.use('/', require('./server/routes/main'))

app.use((req, res) => {
    res.render('404', {title : "Error! 404"})
});

app.listen(PORT, () => {
    console.log("Connected to the Server");
});

