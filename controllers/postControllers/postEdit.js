const Cube = require('../../models/Cube');

let postEdit = async function(req, res) {
    let cubeId = req.params.id;
    let cubeInputField = req.body;

    let cubeInfo = await Cube.findById(cubeId);
    // console.log(cubeInfo)

    if(cubeInputField.name !== ''){
        cubeInfo.name = cubeInputField.name;
    }
    if(cubeInputField.description !== '') {
        cubeInfo.description = cubeInputField.description;
    } 
    if(cubeInputField.imageUrl !== '') {
        cubeInfo.imageUrl = cubeInputField.imageUrl;
    }
    cubeInfo.difficultyLevel = cubeInputField.difficultyLevel;
    
    cubeInfo.save(function(err, cubeInfo) {
        if (err) return console.error(err);
    });
    res.redirect(`/details/${cubeId}`);
    // console.log(req.body)
    // console.log(cubeInfo)
};

module.exports = postEdit;