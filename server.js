/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Anthony Martin
 * Github: anthymart
 * Email: martian8@oregonstate.edu
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var port = process.env.PORT || 3000;


var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoUrl = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
var db = null;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function(req, res){
  var collection = db.collection('home');
  collection.find({}).toArray(function (err, gameIcons) {
   if (err) {
     res.status(500).send({
       error: "Error fetching people from DB"
     });
   } else {
     res.status(200).render('home', {
       gameIcons: gameIcons
     });
   }
 });
});

app.get('/index.html', function(req, res){
  var collection = db.collection('home');
  collection.find({}).toArray(function (err, gameIcons) {
   if (err) {
     res.status(500).send({
       error: "Error fetching people from DB"
     });
   } else {
     res.status(200).render('home', {
       gameIcons: gameIcons
     });
   }
 });
});


app.get('/people', function(req, res){
 var collection = db.collection('players');
 collection.find({}).toArray(function (err, players) {
  if (err) {
    res.status(500).send({
      error: "Error fetching people from DB"
    });
  } else {
    res.status(200).render('people', {
      players: players,
      title: "People in the Club"
    });
  }
});
});

app.get('/players/:team', function(req, res, next){
var team = req.params.team.toLowerCase();
 var collection = db.collection('players');
 collection.find({gameid: team}).toArray(function (err, team) {
  if (err) {
    res.status(500).send({
      error: "Error fetching people from DB"
    });
  } else if(team.length < 1){
    res.status(200).render('people', {
      players: team,
      title: "No players for this team yet... Sign up on the Join page!"
    });
  } else {
    res.status(200).render('people', {
      players: team,
      title: team[0].game
    });
  }
});
});

app.get('*', function (req, res) {
  console.log(req.url);
  res.status(404).render('404');
});

MongoClient.connect(mongoUrl,  { useNewUrlParser: true }, function (err, client) {
  if (err) {
    throw err;
  }
  console.log("Connected to mongo");
  db = client.db(mongoDBName);
  app.listen(port, function () {
    console.log("== Server listening on port", port);
  });
});
