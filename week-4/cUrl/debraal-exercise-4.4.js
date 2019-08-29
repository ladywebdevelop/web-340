/*
======================================
Title: Exercise 4.4 cUrl
Author: Rita DeBraal
Date: 29 August 2019
Description: Demonstrate cUrl
======================================
*/

// Import statement from header file
const header = require('../../debraal-header.js')
// Print statement with firstName, lastName, and assignment parameters
console.log(header.display('Rita', 'DeBraal', 'Exercise 4.4'))

var express = require("express");
var http = require("http");
var logger = require("morgan");

var app = express();

app.use(logger('dev'));

app.get("/", function(req, res) {
  res.send('You just sent a GET request, friend');
});

app.post("/", function(req, res) {
  res.send('Your Owl just POSTED, Harry.');
});

app.put("/", function(req, res) {
  res.send('You call that light reading, PUT');
});

app.delete("/", function(req, res) {
  res.send('Do you really want to DELETE Nimbus 2000.');
});

http.createServer(app).listen(8080, function() {
  console.log('Application started on port 8080');
});
