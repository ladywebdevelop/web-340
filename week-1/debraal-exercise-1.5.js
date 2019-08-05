/*
==============================================
Title: Exercise 1.5 - Hello World
Author: Rita DeBraal
Date: 05 August 2019
Description: Hello World
==============================================
*/

// Import statement from header file
const header = require('../debraal-header.js')
// Print statement with firstName, lastName, and assignment parameters
console.log(header.display('Rita', 'DeBraal', 'Exercise 1.3'))

var url = require("http");
function processRequest(req, res) {
  var body = 'Equal parts white and dark chocolate. ' +
            'A balanced diet does not make.';
  var contentLength = body.length;
  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });
  res.end(body);
}
