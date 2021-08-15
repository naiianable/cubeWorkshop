const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newUser = new Schema ({
    username: String,
    password: String,
});

const User = mongoose.model('User', newUser);

module.exports = User;