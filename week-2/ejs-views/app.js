/*
=================================================
Title: Exercise 2.4 EJS Views
Author: Rita DeBraal
Date: 05 August 2019
Description: Demonstrate EJS Views
=================================================
*/

// Import statement from header file
const header = require('../../debraal-header.js')
// Print statement with firstName, lastName, and assignment parameters
console.log(header.display('Rita', 'DeBraal', 'Exercise 2.4'))

var http = require('http');
var express = require('express');
var path = require('path');
var app = express();

// Tell Express the views are in the 'views' directory
app.set('views', path.resolve(__dirname, 'views'));

// Tell Express to use the EJS view engine
app.set('view engine', 'ejs');

// Getter to display the welcome message
app.get("/", function(request, response) {
  response.render('index', {
    message: "Rita DeBraal!"
  });
});

// Create a server and display confirmation
http.createServer(app).listen(8080, function() {
  console.log("EJS - Views app started on port 8080.");
});
