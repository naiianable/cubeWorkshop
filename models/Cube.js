const mongoose = require('mongoose');
// const { Schema } = mongoose.Schema;

//schema blueprint for new cubes being pushed
const newCube = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number
});

const Cube = mongoose.model('Cube', newCube);
console.log(Cube);

// myCube.save(function(err, myCube) {
//     if(err) return console.err(err);
//     console.log(myCube);
// });

module.exports = Cube;