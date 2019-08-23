/*
=================================================
Title: Exercise 3.3 Advanced Routing
Author: Rita DeBraal
Date: 22 August 2019
Description: Demonstrate Advanced Routing
=================================================
*/

// Import statement from header file
const header = require('../../debraal-header.js')
// Print statement with firstName, lastName, and assignment parameters
console.log(header.display('Rita', 'DeBraal', 'Exercise 3.3'))

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/:employeeId", function(request, response){
  var employeeId = parseInt(request.params.employeeId, 10);

  response.render("index", {
    employeeId: employeeId
  });
});

http.createServer(app).listen(8080, function() {
  console.log('Application started on port 8080');
});
