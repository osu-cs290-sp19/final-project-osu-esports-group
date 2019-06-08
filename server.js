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

app.post('/join/addMember', function (req, res, next) {
  if (req.body && req.body.name && req.body.username && req.body.email && req.body.year && req.body.game && req.body.gameid) {
    var collection = db.collection('players');
    var player = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      year: req.body.year,
      game: req.body.game,
      gameid: req.body.gameid
    };
    console.log(player);
    collection.insertOne(player,
      function (err, result) {
        if (err) {
          res.status(500).send({
            error: "Error inserting player into DB"
          });
        } else {
          res.status(200).send("Success");
        }
      }
    );
  } else {
    res.status(400).send("Request needs a body with all fields");
  }
});

app.get('/join', function(req, res){
  res.status(200).render('join', {
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
