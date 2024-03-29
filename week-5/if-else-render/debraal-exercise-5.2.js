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
console.log(header.display('Rita', 'DeBraal', 'Exercise 5.2'))

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var hogan = ["Hogan", "Klink", "Schultz", "Newkirk", "LeBeau"];

app.get("/", function(req, res) {
  res.render("index", {
    names: hogan
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
