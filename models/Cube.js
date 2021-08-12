const mongoose = require('mongoose');
const Accessory = require('./Accessory');
const Schema = mongoose.Schema;

//schema blueprint for new cubes being pushed
const newCube = new Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,
    //mongoose docs...populate => replacing specified paths in the doc with docs from other collections
    //referencing Accessory.js.  type is the schema.types.objectid
    accessory: [{type: Schema.Types.ObjectId, ref: 'Accessory'}]
});

//mongodb takes first arg 'Cube' and makes a collection.  it makes it lowercase and pluralizes
const Cube = mongoose.model('Cube', newCube);
//console.log('THIS IS NEWCUBE', Schema.Types.ObjectId);

// myCube.save(function(err, myCube) {
//     if(err) return console.err(err);
//     console.log(myCube);
// });

module.exports = Cube;