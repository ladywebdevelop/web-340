/*
============================================
; Title:  Cross-site Request Forgery
; Author: Rita DeBraal
; Date:   26 September 2019
; Description: Demonstrates how to configure an application for
;              CSRF protection
;===========================================
*/

// Require Statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

// csrf protection setup
var csrfProtection = csrf({ cookie: true});

// express application initialization
var app = express();

// use statements
app.use(logger("short"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cookieParser());
app.use(csrfProtection);
app.use(function(req, res, next) {
  var token = req.csrfToken();
  res.cookie("XSRF-TOKEN", token);
  res.locals.csrfToken = token;
  next();
});

// Set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Routing
app.get("/", function(request, response) {
  response.render("index", {
    message: "New Fruit Entry Page"
  });
});

app.post("/process", function(request, response) {
  console.log(request.body.txtName);
  response.redirect("/");
});

// Create and confirm Node server
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
