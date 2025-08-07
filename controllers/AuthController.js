var express = require('express');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });

var validator = require('express-validator'); 

var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

//This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

let users = [
    {id: 1, username: 'admin', password: '123456', email: 'admin@themesbrand.com' }
];

//Mock GET request to /users when param `searchText` is 'John'
mock.onGet("/users", {params: {searxhText: "John"} }).reply(200, {
    users: users,
});

module.exports = function(app) {

    //Inner Auth
   app.get('/pages-login', function(req, res) {
    res.locals = {title: 'Login'};
    res.render('AuthInner/pages-login');
   });
   app.get('/pages-register', function(req, res) {
    res.locals = {title: 'Register'};
    res.render('AuthInner/pages-register');
   });
   app.get('/pages-recoverpw', function(req, res) {
     res.locals = { title: 'Recover Password'};
     res.render('AuthInner/pages-recoverpw');
   })
}