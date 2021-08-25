const Cube = require('../../models/Cube');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

let postCreate = function(req, res) {
    //console.log('THIS IS THE REQUEST.BODY', req.body);
    //req.body = parsed json data from body parser in express.js
    //putting it into cube schema
    let newCube = new Cube(req.body);

    let token = req.cookies.token;
    let userData = jwt.verify(token, process.env.MYSECRET);
    newCube.creatorId = userData.userId;

    let errors = validationResult(req);

    if(!errors.isEmpty()) {
      res.cookie('errorMsg', errors);
      console.log(errors);
      res.redirect('/create');
    } else if(errors.isEmpty()){
      newCube.save(function (err, newCube) {
          if (err) return console.error(err);
        });
      res.redirect('/');
    }

    
    
};

module.exports = postCreate;