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
    app.get('/details/:id', async function(req, res) {
        let cubeId = req.url.split('/')[2];
        //finding the specific cube called upon with callback function
        let cubeDetails = await Cube.findById(cubeId, function(err, cube) {
            console.log(cube);
            //populating the accessory key using the object ids currently stored within its values
        }).populate('accessory')
        .lean(); 
           res.render('details', {cubeDetails}); 
    });

    app.get('/create/accessory', function(req, res) {
        res.render('createAccessory');
    });

    app.get('/attachAccessory/:id', function(req, res) {
        Cube.find(function(err, cubes) {
            let cubeId = req.url.split('/')[2];
            let cubeDetails = cubes.filter(data => data._id == cubeId);
            //console.log('THESE ARE THE CUBES', cubes);
            
            Accessory.find(function(err, accessories) {

                let accessoryList = [];
                accessories.forEach(element => {
                    accessoryList.push(element);
                });
                //console.log(accessoryList);
                res.render('attachAccessory', {cubeDetails, accessoryList});
            }).lean(); 
        }).lean();
    });


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
        
        newAccessory.save(function (err, newAccessory) {
            if (err) return console.error(err);
            
          });
        res.redirect('/');
    });

    app.post('/attachAccessory/:id', function(req, res) {
        let cubeId = req.params.id;

            Cube.findById(cubeId, function(err, theCube) {
                if (err) return console.error(err);
                console.log(theCube);
                console.log('THIS IS accessory', req.body);
                
            })//find one cube whos id is cubeId
                .findOne({_id: cubeId}, function(error, data) {
                    console.log('THIS IS ACCESSORY IN DATABASE', data);
                })
                .then(response => {
                    //accessory chosen in dropdown menu
                    let attachedAccessory = req.body;
                    //initial response showing the original cube and its data
                    console.log('THIS is temp', response);
                    //pushing chosen accessory into accessory array in data
                    response.accessory.push(attachedAccessory.accessory);
                    console.log('THIS IS UPDATED TEMP', response);
                    //saving the cube and new accessories in database
                    response.save(function(err, temp) {
                        if (err) return console.error(err);
                    });
                });
            res.redirect(`/attachAccessory/${cubeId}`);        
    });
};