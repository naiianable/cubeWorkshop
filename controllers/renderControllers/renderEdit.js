const Cube = require('../../models/Cube');

let renderEdit = async function(req, res) {

    let cubeId = req.params.id;
    let cubeDetails = await Cube.findById(cubeId).lean();
    res.render('editCubePage', {cubeDetails});
};

module.exports = renderEdit;