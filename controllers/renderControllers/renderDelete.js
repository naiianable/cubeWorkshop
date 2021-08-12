const Cube = require('../../models/Cube');

let renderDelete = function(req, res) {
    let cubeId = req.params.id;
    Cube.findById(cubeId, function(err, cube) {
        res.render('deleteCubePage', {cube});
    }).lean();
};

module.exports = renderDelete;