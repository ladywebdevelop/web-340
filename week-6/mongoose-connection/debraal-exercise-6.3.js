/*
============================================
; Title:  Mongoose
; Author: Rita DeBraal
; Date:   12 September 2019
; Description: Mongoose
;===========================================
*/

// Import statement from header file
const header = require('../../debraal-header')
// Print statement with firstName, lastName, and assignment parameters
console.log(header.display('Rita', 'DeBraal', 'Assignment 6.3'))

// Require statements
var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');

var mongoDB = 'mongodb+srv://ladyautodr:michale1@buwebdev-cluster-1-rh1iu.mongodb.net/test';
mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Mongoose connection error:' ));
db.once('open', function() {
  console.log('Application connected to mLab');
});

var app = express();
app.use(logger('dev'));

http.createServer(app).listen(8080, function() {
  console.log('Application started and listening on port 8080');
});
