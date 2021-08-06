const mongoose = require('mongoose');
// const { Schema } = mongoose.Schema;

const newAccessory = new mongoose.Schema({
    name: String,
    imageUrl: String,
    description: String,
    cubes: Number
});

const Accessory = mongoose.model('Accessory', newAccessory);
console.log(Accessory);

module.exports = Accessory;