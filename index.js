var app = require('express');

var express = require('express');
var path = require('path');
var http = require('http').Server(app);
var validator = require('express-validator');


// import controller 
var AuthController = require('./controllers/')