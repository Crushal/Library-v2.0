const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema( {
    title : {type : String, required : true},
    author : {type : String, required : true},
    pages : {type : Number, required : true},
    read : {type : Boolean}
});

const book = mongoose.model('book', bookSchema);

module.exports = book;