const Cube = require('../../models/Cube');

let renderDelete = async function(req, res) {
    let cubeId = req.params.id;
    let cubeDetails = await Cube.findById(cubeId).lean();
    res.render('deleteCubePage', {cubeDetails});
};

module.exports = renderDelete;