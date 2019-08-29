/*
======================================
Title: Exercise 4.3 Status Codes
Author: Rita DeBraal
Date: 29 August 2019
Description: Demonstrate Status Codes
======================================
*/

// Import statement from header file
const header = require('../../debraal-header.js')
// Print statement with firstName, lastName, and assignment parameters
console.log(header.display('Rita', 'DeBraal', 'Exercise 4.3'))

var express = require("express");
var http = require("http");
var logger = require("morgan");

var app = express();

app.use(logger('dev'));

// status code requests
app.get('/not-found', function(req, res) {
  res.status(404);
  res.json({
    error: 'You have joined the Dark Side.'
  });
});

app.get('/ok', function(req, res) {
  res.status(200);
  res.json({
    error: 'The force is strong with this one.'
  });
});

app.get('/not-implemented', function(req, res) {
  res.status(501);
  res.json({
    error: 'Use the force, Luke.'
  });
});

http.createServer(app).listen(8080, function() {
  console.log('Application started on port 8080');
});
