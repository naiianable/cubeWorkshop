// TODO: Require Controllers...
//requiring code from /express.js...requiring the view engine that was setup
const engine = require('./express');
const express = require('express');
const exphbs = require('express-handlebars');
const url = require('url');
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
// const renderPages = require('./renderPages.js');

module.exports = (app) => {
    //getting all the routes working for express.js
    app.get('/', function(req, res) {
        //.find method access items in database requested.  generic function used to access cubes
        Cube.find(function(err, cubes) {
            //console.log(cubes);
            res.render('index', {cubes});
        }).lean();
        
    });

    app.get('/create', function(req, res) {
        res.render('create');
    });

    app.get('/about', function(req, res) {
        res.render('about');
    });

    //grabbing details from specific id of cube
    app.get('/details/:id', function(req, res) {
        Cube.find(function(err, cubes) {
            let cubeId = req.url.split('/')[2];
            let cubeDetails = cubes.filter(data => data._id == cubeId);
            console.log('this is the cube', cubeDetails);
            res.render('details', {cubeDetails}); 
        }).lean();
        
    });
    //params.id will give you everything after the url

    app.get('/create/accessory', function(req, res) {
        res.render('createAccessory');
    });

    app.get('/attach/accessory', function(req, res) {
        res.render('attachAccessory');
    });

    //NOT WORKING YET
    app.get('/details/:id', function(req, res) {
        res.render('updatedDetailsPage');
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

    app.post('/create/accessory', function(req, res) {
        console.log('THIS IS THE REQUEST.BODY', req.body);
        //req.body = parsed json data from body parser in express.js
        //putting it into cube schema
        let newAccessory = new Accessory(req.body);
        
        newCube.save(function (err, newCube) {
            if (err) return console.error(err);
          });
        res.redirect('/');
    });
};