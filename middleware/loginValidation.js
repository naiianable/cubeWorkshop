const { body, validationResult } = require('express-validator');
const User = require('../models/User');


    let validationBodyRules = [
    //do checks here
    // body('username', 'Username Invalid')
    // .trim()
    // .notEmpty()
    // .custom((value, async {req, loc, path}) => {
    //     let user = req.body.username;
    //     let plainTextPass = req.body.password;

    //     let loginUser = await User.findOne({ username: user }).lean();

    //     let userId = loginUser._id;
    //     let userName = loginUser.username;
    //     let userHashPass = loginUser.password;
    //     console.log(loginUser)
    // }),

    // body('password', 'Password Invalid')
    // .trim()
    // .notEmpty()
    // .isLength({ min: 8 })
    // .isAlphanumeric()
    // .custom((value,{req, loc, path}) => {
    //     if (value !== req.body.repeatPassword) {
    //         // throw error if passwords do not match
    //         throw new Error("Passwords don't match");
    //     } else {
    //         return value;
    //     }
    // }),

    ];


module.exports = validationBodyRules;