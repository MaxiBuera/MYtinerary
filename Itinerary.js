var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itinerarySchema = new Schema({
    title: String,
    city: String,
    country: String,
    username: String,
    userPhoto: String,
    rating: Number,
    duration: Number,
    price: String,
    hashtags: Array,
    activities: Array
})

var Itinerary = mongoose.model('Itinerary', itinerarySchema,"itineraries");
var newItinerary = new Itinerary({
    title: 'Along Antall Jozsef',
    city: "Budapest",
    country: "Hungary",
    username: "HungarianGirl21",
    userPhoto: "https://i.imgur.com/dI2ueSB.png",
    rating: 3.67,
    duration: 4,
    price: "$$",
    hashtags: ['#Architecture', '#Budapest', '#MYtin'],
    activities: [
        {
            Name: "Shoes on the Danube Bank",
            Adress: "Budapest, Id. Antall József rkp., 1054 Hungary",
            Photo: "shoes-on-the-danube-bank.jpg",
            Time: 0.5,
            Cost: "free",
            Comments: "Waterside shoe sculptures memorializing those killed at the river by a fascist party during WWII."
        }
        , {
            Name: "Hungarian Parliament Building",
            Adress: "Budapest, Kossuth Lajos tér 1-3, 1055 Hungary",
            Photo: "hungarian-parliament-building.jpg",
            Time: 2,
            Cost: 7.40,
            Comments: "Landmark Gothic Revival–style edifice with lavishly decorated rooms, plus a visitors' center."
        }
        , {
            Name: "Iguana Bar & Grill",
            Adress: "Budapest, Zoltán u. 16, 1054 Hungary",
            Photo: "no-photo.png",
            Time: 1.5,
            Cost: 10,
            Comments: "Enchiladas, burritos & tequila menu in high-ceilinged restaurant, with colourful Mexican poster art."
        }
    ]
});
console.log(newItinerary.title, newItinerary.rating);
newItinerary.save(function (err, newItinerary) {
    if (err) return console.error(err);
    console.log("Guarde un itinerario en la DB! Se llama ", newItinerary.title);
});
module.exports = Itinerary;