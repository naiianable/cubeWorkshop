// TODO: Require Controllers...
//requiring code from /express.js...requiring the view engine that was setup
const engine = require('./express');
const express = require('express');
const exphbs = require('express-handlebars');
const Cube = require('../models/Cube');
// const renderPages = require('./renderPages.js');

module.exports = (app) => {
    //getting all the routes working for express.js
    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/create', function(req, res) {
        res.render('create');
    });

    app.get('/about', function(req, res) {
        res.render('about');
    });

    //grabbing details from specific id of cube
    app.get('/details/:id', function(req, res) {
        res.render('details');
    });
    //params.id will give you everything after the url

    // '/*' means 'every other page, render this one' 
    app.get('/*', function(req, res) {
        res.render('404');
    });

    app.post('/create', function(req, res) {
        console.log(req.body);
        const newNewCube = new Cube({
            name: 'Pointy Cube',
            description: 'Sharp and pointed',
            imageURL: 'randomUrl',
            difficulty: 4
        });
        console.log(newNewCube);
        res.send('form submission recevied');
    });
};