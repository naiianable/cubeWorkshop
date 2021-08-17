const Cube = require('../../models/Cube');
//const postLogin = require('../postControllers/postLogin')

let renderIndex = function(req, res) {
    //.find method access items in database requested.  generic function used to access cubes
    let loggedIn = req.cookies.loggedIn;

    Cube.find(function(err, cubes) {
        //console.log(cubes);
        res.render('index', {cubes, loggedIn});
    }).lean();
    
};

module.exports = renderIndex;