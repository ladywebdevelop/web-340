/*
============================================
; Title:  Cross-site Scripting
; Author: Professor Krasso
; Date:   26 September 2019
; Description: Demonstrates how to configure an application for
;              XSS threats.
;===========================================
*/

// Require Statements
var express = require("express");
var http = require("http");
var logger = require("morgan");
var helmet = require("helmet");
var path = require("path");

// Express Initialize
var app = express();

// Use statements
app.use(logger("short"));
app.use(helmet.xssFilter());

// Set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Calls http
app.get("/", function(req, res) {
  res.render("index", {
    message: "XSS Prevention Example"
  });
});

// Create & confirm port starting
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
})
