const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newUser = new Schema ({
    username: {
        type: String,
        unique: true,
        min: 5,
        required: true
    },
    password: {
        type: String,
        min: 8,
        required: true
    }
});

const User = mongoose.model('User', newUser);

module.exports = User;