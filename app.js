//jshint esversion:8
const express = require('express');
const bodyParser = require('body-parser');


// import mods
// const date = require(__dirname + '/date.js');


const https = require('https');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));





//
// Routes Start
//


// root route.
app.route("/")
  .get(function(req, res) {
    res.render(__dirname + "/index.html");
  });





// start server on heroku or local 3000.
app.listen(process.env.PORT || 3000, function(req, res) {
  console.log("Restaurant Party is up and running");
});