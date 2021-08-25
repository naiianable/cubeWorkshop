const Cube = require('../../models/Cube');

let renderEdit = async function(req, res) {
    let loggedIn = req.cookies.loggedIn;

    let cubeId = req.params.id;
    let cubeDetails = await Cube.findById(cubeId).lean();

    let options = [];
    for(let i = 1; i <= 6; i++) {
        if(i == cubeDetails.difficultyLevel) {
            options[i-1] = true;
        } else {
            options[i-1] = false;
        }
    }

    let [lvlOne, lvlTwo, lvlThree, lvlFour, lvlFive, lvlSix] = options;

    res.render('editCube', { cubeDetails, loggedIn, lvlOne, lvlTwo, lvlThree, lvlFour, lvlFive, lvlSix });
};

module.exports = renderEdit;