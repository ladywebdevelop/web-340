/*
======================================
Title: Exercise 5.2 EJS Templates
Author: Rita DeBraal
Date: 5 September 2019
Description: Demonstrate EJS Templates
======================================
*/

// Import statement from header file
const header = require('../../debraal-header.js')
// Print statement with firstName, lastName, and assignment parameters
console.log(header.display('Rita', 'DeBraal', 'Exercise 4.3'))

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var f = ["Hogan", "Klink", "Schultz"];

app.get("/", function(req, res) {
  res.render("index", {
    Heros: f
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
