var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let itineraries = new Schema({
    title: String,
    profile_picture: String,
    rating: String,
    duration: String,
    price: String,
    hashtags: String
})

module.exports = mongoose.model('itineraries', itineraries)
