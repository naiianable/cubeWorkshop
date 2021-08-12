const Cube = require('../../models/Cube');
const Accessory = require('../../models/Accessory');

let renderAttachAcc = function(req, res) {
    Cube.find(function(err, cubes) {
        let cubeId = req.url.split('/')[2];
        let cubeDetails = cubes.filter(data => data._id == cubeId);
        //console.log('THESE ARE THE CUBES', cubes);
        
        Accessory.find(function(err, accessories) {

            let accessoryList = [];
            accessories.forEach(element => {
                accessoryList.push(element);
            });
            //console.log(accessoryList);
            res.render('attachAccessory', {cubeDetails, accessoryList});
        }).lean(); 
    }).lean();
};

module.exports = renderAttachAcc;