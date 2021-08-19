const Cube = require('../../models/Cube');
const jwt = require('jsonwebtoken');

//async needed to wait for the cube id data
let renderDetails = async function(req, res) {
        let loggedIn = req.cookies.loggedIn;
        let token = req.cookies.token;
        let userData = jwt.verify(token, process.env.MYSECRET);
        // console.log('THIS IS USER DATA FROM JWT',userData.userId);

        let cubeId = req.params.id;
        
        //populating the accessory key using the object ids currently stored within its values
        let cubeDetails = await Cube.findById(cubeId)
        .populate('accessory')
        .lean(); 
        let authorized;
        if(userData.userId == cubeDetails.creatorId) {
                authorized = true;
        } else {
                authorized = false;
        }
        // console.log('THIS IS DETAILS FROM CUBE DB', cubeDetails.creatorId);
           res.render('details', { cubeDetails, authorized, loggedIn }); 
};

module.exports = renderDetails;