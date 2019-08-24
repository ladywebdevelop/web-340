/*
=================================================
Title: Exercise 3.4 Putting it all together
Author: Rita DeBraal
Date: 22 August 2019
Description: Demonstrate putting it all together
=================================================
*/

// Import statement from header file
const header = require('../../debraal-header.js')
// Print statement with firstName, lastName, and assignment parameters
console.log(header.display('Rita', 'DeBraal', 'Exercise 3.4'))

// Require statements to direct traffic
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

// Where to find the views file
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

// Get functions to render appropriate pages
app.get("/", function(request, response) {
  response.render("index", {
    message: "home page"
  });
});

app.get("/about", function(request, response) {
  response.render("about", {
    message: "about page"
  });
});

app.get("/contact", function(request, response) {
  response.render("contact", {
    message: "contact page"
  });
});

app.get("/products", function(request, response) {
  response.render("products", {
    message: "products page"
  });
});

// Create server and acknowledgment
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080.")
});
