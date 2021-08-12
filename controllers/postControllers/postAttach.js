const Cube = require('../../models/Cube');

let postAttach = function(req, res) {
    let cubeId = req.params.id;

        Cube.findById(cubeId, function(err, theCube) {
            if (err) return console.error(err);
            console.log(theCube);
            console.log('THIS IS accessory', req.body);
            
        })//find one cube whos id is cubeId
            .findOne({_id: cubeId}, function(error, data) {
                console.log('THIS IS ACCESSORY IN DATABASE', data);
            })
            .then(response => {
                //accessory chosen in dropdown menu
                let attachedAccessory = req.body;
                //initial response showing the original cube and its data

                console.log('THIS is temp', response);
                //pushing chosen accessory into accessory array in data
                response.accessory.push(attachedAccessory.accessory);
                
                console.log('THIS IS UPDATED TEMP', response);
                //saving the cube and new accessories in database
                response.save(function(err, temp) {
                    if (err) return console.error(err);
                });
            });
        res.redirect(`/attachAccessory/${cubeId}`);        
};

module.exports = postAttach;