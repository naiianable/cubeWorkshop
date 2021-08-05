const mongoose = require('mongoose');
// const { Schema } = mongoose.Schema;

//schema blueprint for new cubes being pushed
const newCube = new mongoose.Schema({
    name: String,
    description: String,
    imageURL: String,
    difficulty: Number
});

const myCube = mongoose.model('Cube', newCube);
console.log(myCube);

// myCube.save(function(err, myCube) {
//     if(err) return console.err(err);
//     console.log(myCube);
// });

module.exports = myCube;