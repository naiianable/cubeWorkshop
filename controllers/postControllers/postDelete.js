const Cube = require('../../models/Cube');

let postDelete = async function (req, res) {
    
    let cubeId = req.params.id;
    await Cube.deleteOne({ _id: cubeId});
    res.redirect('/');
};

module.exports = postDelete;