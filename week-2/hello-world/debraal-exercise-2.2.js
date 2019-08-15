/*
=================================================
Title: Exercise 2.2 Hello World with Express
Author: Rita DeBraal
Date: 05 August 2019
Description: Demonstrate Hello World with Express
=================================================
*/

// Import statement from header file
const header = require('../../debraal-header.js')
// Print statement with firstName, lastName, and assignment parameters
console.log(header.display('Rita', 'DeBraal', 'Exercise 2.2'))

// Get express
var express = require('express');
// Get http
var http = require('http');

// Assign express to app variable
var app = express();

app.use(function(req, res)
{
  console.log('In comes a request to: %s', req.url);

  res.end('Hello World\n');
})

// Make server listen on port 8080 and output when successful
http.createServer(app).listen(8080, function()
{
  console.log('Application started on port %s', 8080);
});
