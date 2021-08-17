const Cube = require('../../models/Cube');

let postCreate = function(req, res) {
    console.log('THIS IS THE REQUEST.BODY', req.body);
    //req.body = parsed json data from body parser in express.js
    //putting it into cube schema
    let newCube = new Cube(req.body);

    
    
    newCube.save(function (err, newCube) {
        if (err) return console.error(err);
      });
    res.redirect('/');
};

module.exports = postCreate;