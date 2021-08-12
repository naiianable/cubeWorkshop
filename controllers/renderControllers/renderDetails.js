const Cube = require('../../models/Cube');

let renderDetails = async function(req, res) {
        let cubeId = req.url.split('/')[2];
        //finding the specific cube called upon with callback function
        let cubeDetails = await Cube.findById(cubeId, function(err, cube) {
            console.log(cube);
            //populating the accessory key using the object ids currently stored within its values
        }).populate('accessory')
        .lean(); 
           res.render('details', {cubeDetails}); 
};

module.exports = renderDetails;