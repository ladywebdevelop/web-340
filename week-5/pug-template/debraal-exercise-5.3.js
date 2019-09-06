/*
======================================
Title: Exercise 5.3 Pug Template
Author: Rita DeBraal
Date: 6 September 2019
Description: Demonstrate PUG Templates
======================================
*/

// Import statement from header file
const header = require('../../debraal-header.js')
// Print statement with firstName, lastName, and assignment parameters
console.log(header.display('Rita', 'DeBraal', 'Exercise 5.3'))

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", function(req, res) {
  res.render("index", {
    message:"I\'ve a soft spot for Klinger. He looks a little like" +
            "my son, and he dresses a lot like my wife."
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
