/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Anthony Martin
 * Github: anthymart
 * Email: martian8@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var port = process.env.PORT || 3000;

var app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/people', function(req, res){
  res.status(200).render('people');
});

app.get('*', function (req, res) {
  console.log(req.url);
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
