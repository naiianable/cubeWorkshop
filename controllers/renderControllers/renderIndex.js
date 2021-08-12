const Cube = require('../../models/Cube');
const Accessory = require('../../models/Accessory');

let renderIndex = function(req, res) {
    //.find method access items in database requested.  generic function used to access cubes
    Cube.find(function(err, cubes) {
        //console.log(cubes);
        res.render('index', {cubes});
    }).lean();
    
}

module.exports = renderIndex;