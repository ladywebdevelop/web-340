/*
==============================================
Title: Exercise 1.3 Modules
Author: Rita DeBraal
Date: 05 August 2019
Description: Demonstrate Modules
==============================================
*/

// Import statement from header file
const header = require('../debraal-header.js')
// Print statement with firstName, lastName, and assignment parameters
console.log(header.display('Rita', 'DeBraal', 'Exercise 1.3'))

var url = require('url');
var parsedURL = url.parse("https://www.facebook.com/lilred1214");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
