var express = require('express');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });

var validator = require('express-validator'); 

var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

//This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

let users = [
    {id: 1, username: 'admin', password: '123456', }
]