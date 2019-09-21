/*
============================================
; Title:  fruit.js
; Author: Rita DeBraal
; Date:   21 September 2019
; Description: File for the Fruit database model
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema
let employeeSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
});

module.exports = mongoose.model('Employee', employeeSchema);
