const mongoose = require('mongoose');
const URI = process.env.dpURI;

const dbConnect = () => mongoose.connect(URI)
                                .then(() => {
                                    console.log("database connected");
                                })
                                .catch(err => console.log(err))

module.exports = dbConnect;