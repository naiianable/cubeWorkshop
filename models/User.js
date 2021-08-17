const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newUser = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', newUser);

module.exports = User;