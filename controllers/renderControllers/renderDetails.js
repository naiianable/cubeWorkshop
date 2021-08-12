const Cube = require('../../models/Cube');

//async needed to wait for the cube id data
let renderDetails = async function(req, res) {
        let cubeId = req.params.id;
        //populating the accessory key using the object ids currently stored within its values
        let cubeDetails = await Cube.findById(cubeId)
        .populate('accessory')
        .lean(); 
           res.render('details', {cubeDetails}); 
};

module.exports = renderDetails;