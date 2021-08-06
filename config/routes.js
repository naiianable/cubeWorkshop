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

    app.get('/create/accessory', function(req, res) {
        res.render('createAccessory');
    });

    // app.get('/create/accessory/:id', function(req, res) {
    //     res.render('attachAccessory');
    // });

    // '/*' means 'every other page, render this one' 
    app.get('/*', function(req, res) {
        res.render('404');
    });

    app.post('/create', function(req, res) {
        console.log('THIS IS THE REQUEST.BODY', req.body);
        //req.body = parsed json data from body parser in express.js
        //putting it into cube schema
        let newCube = new Cube(req.body);
        
        newCube.save(function (err, newCube) {
            if (err) return console.error(err);
          });
        res.redirect('/');
    });
};