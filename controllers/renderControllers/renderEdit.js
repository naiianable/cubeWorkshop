const Cube = require('../../models/Cube');

let renderEdit = function(req, res) {

    let cubeId = req.params.id;
    Cube.findById(cubeId, function(err, cube) {
        console.log(cube);
        res.render('editCubePage', {cube});
        
    }).lean();
    
};

module.exports = renderEdit;