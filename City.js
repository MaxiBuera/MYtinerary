var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let cities = new Schema({
    country: String,
    city: String,
    img: String
})

module.exports = mongoose.model('cities', cities,"cities")