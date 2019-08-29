/*
=================================================
Title: Exercise 4.2 JSON-API
Author: Rita DeBraal
Date: 22 August 2019
Description: Demonstrate JSON-Api
=================================================
*/

// Import statement from header file
const header = require('../../debraal-header.js')
// Print statement with firstName, lastName, and assignment parameters
console.log(header.display('Rita', 'DeBraal', 'Exercise 3.2'))

var express = require("express");
var http = require("http");
var logger = require("morgan");

var app = express();

app.use(logger('dev'));


app.get('/customer/:id', function(request, response) {
  var id = parseInt(request.params.id, 10);

  response.json ({
    firstName: 'Rita',
    lastName: 'DeBraal',
    email: 'ladyautodr@gmail.com',
    employeeId: id
  });
});

http.createServer(app).listen(8080, function() {
  console.log('Application started and listening on port 8080')
});
