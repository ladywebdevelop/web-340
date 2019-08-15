/*
=================================================
Title: Exercise 2.3 Routes
Author: Rita DeBraal
Date: 05 August 2019
Description: Demonstrate Routes
=================================================
*/

// Import statement from header file
const header = require('../../debraal-header.js')
// Print statement with firstName, lastName, and assignment parameters
console.log(header.display('Rita', 'DeBraal', 'Exercise 2.3'))

// Require statement for express
var express = require('express');
// Require statement for http library
var http = require('http');

var app = express();

// Route interceptors
app.get('/', function(req, res){
  res.end('Welcome to the homepage.\n');
});

app.get('/about', function(req, res) {
  res.end('Welcome to the about page.\n');
});

app.get('/contact', function(req, res) {
  res.end('Welcome to the contact page.\n');
});

app.use(function(req, res){
  res.statusCode = 404;
  res.end('404!\n');
});

// Create node server and a listener port
http.createServer(app).listen(3000, function(){
  console.log('Application started on port %s', 3000);
});
