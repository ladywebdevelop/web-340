/*
=================================================
Title: Exercise 23.2 Logging
Author: Rita DeBraal
Date: 22 August 2019
Description: Demonstrate Logging
=================================================
*/

// Import statement from header file
const header = require('../../debraal-header.js')
// Print statement with firstName, lastName, and assignment parameters
console.log(header.display('Rita', 'DeBraal', 'Exercise 3.2'))

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

// Views are in views dir
app.set("views",path.resolve(__dirname,"views"));

// Use EJS view engine
app.set("view engine","ejs");

app.use(logger("short"));

app.get("/",function(request, response){
  response.render("index", {
    message:"Welcome to the Lil RED Example!"
  });
});

http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080");
});

