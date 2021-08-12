const mongoose = require('mongoose');
const Cube = require('./Cube');
const Schema = mongoose.Schema;

const newAccessory = new Schema({
    name: String,
    imageUrl: String,
    description: String,
    cubes: Number
});

const Accessory = mongoose.model('Accessory', newAccessory);
//console.log(Accessory);

module.exports = Accessory;