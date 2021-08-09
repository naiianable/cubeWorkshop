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
            console.log(cubes);
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
        //console.log(url.parse(req.url).pathname);
        let cubeId = req.url.split('/')[2];

        Cube.find(function(err, ) {

            res.render('details', cubeData); 
        });
        
    });
    //params.id will give you everything after the url

    // app.get('/details/:id', (req, res) => {
    //     Cube.find(function(err, cubes){
    //         if (err) return console.log(err);
    //         const path = url.parse(req.url).pathname;
    //         let currentId = path.split('/')[2];
    //         console.log("Printing", currentId);
    //         console.log("This is cubes: ", cubes);
    //         let currentCube = cubes.filter(cube => {
    //             console.log("1:" , typeof cube._id);
    //             console.log("2: ", typeof currentId);

    //         });
    //         console.log("This is currentCube: ", currentCube);
    //         res.render('details', {currentCube});
    //     });
    // });

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