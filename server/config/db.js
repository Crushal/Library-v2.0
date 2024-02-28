const mongoose = require('mongoose');
const URI = process.env.dpURI;

const dbConnect = () => mongoose.connect(URI);

module.exports = dbConnect;