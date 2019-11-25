const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const City = require('./City');
const Itinerary = require('./Itinerary');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;
const maxidb = 'mongodb+srv://MaxiB:Argentina@mycluster-9sh7r.mongodb.net/citiesdb?retryWrites=true&w=majority'
const db = 'mongodb+srv://carellomartino:careCARE9900@mycluster-1o7tp.mongodb.net/MYtinerary?retryWrites=true&w=majority'
 mongoose.connect(maxidb, {useNewUrlParser: true , useUnifiedTopology: true } )
 .then( res=> {console.log('base conectada');

   City.find()
   .then(res=> console.log(res))
     })
 .catch(error => handleError(error));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/test', (req, res) => {
  res.send({ express: 'Tests Works' });
});
/*
app.get('/api/cities', async (req, res) => {
  const cities = await City.find()
  res.send(cities)
});*/

app.get('/cities', (req, res) => {
  console.log("conectado")
  City.find()
  .then(resp=> 
  res.send(resp)
  );
});


app.listen(port, () => console.log(`Listening on port ${port}`));

/*
router.get('/get-data', function(req,res,next){

  var resultArray=[];

  mongoose.connect(url, function(err,citiesdb){
      assert.equal(null,err);
      var cursor = citiesdb.collection('country').find();
      cursor.foreach(function (doc,err){
          assert.equal(null,err);
          resultArray.push(doc);
      }, function () {
          citiesdb.close();
          res.render('index',{items: resultArray})
      });
  });
})*/

/*
mongoose.connect(db, {useNewUrlParser: true , useUnifiedTopology: true } )
.then( res=> {console.log('base conectada');

  Itinerary.find()
  .then(res=> console.log(res))
    })
.catch(error => handleError(error));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/test', (req, res) => {
  res.send({ express: 'Tests Works' });
});
/*
app.get('/api/cities', async (req, res) => {
  const cities = await City.find()
  res.send(cities)
});*/
/*
app.get('/itineraries', (req, res) => {
  console.log("conectado")
  Itinerary.find()
  .then(resp=> 
  res.send(resp)
  );
});


app.listen(port, () => console.log(`Listening on port ${port}`));

/*
router.get('/get-data', function(req,res,next){

  var resultArray=[];

  mongoose.connect(url, function(err,citiesdb){
      assert.equal(null,err);
      var cursor = citiesdb.collection('country').find();
      cursor.foreach(function (doc,err){
          assert.equal(null,err);
          resultArray.push(doc);
      }, function () {
          citiesdb.close();
          res.render('index',{items: resultArray})
      });
  });
})*/