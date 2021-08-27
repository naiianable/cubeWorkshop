const { body, validationResult } = require('express-validator');
const User = require('../models/User')
const validator = require('validator');


    let validationBodyRules = [
    //do checks here
    body('username', 'Username Invalid')
    .trim()
    .notEmpty()
    .isLength({ min: 5 })
    .isAlphanumeric()
    .custom(value => {
        return User.findOne({username: value}).then(user => {
          if (user) {
            return Promise.reject('Username exists');
          }
        });
    }),

    body('password', 'Password Invalid')
    .trim()
    .notEmpty()
    .isLength({ min: 8 })
    .isAlphanumeric()
    .custom((value,{req, loc, path}) => {
        if (value !== req.body.repeatPassword) {
            // throw error if passwords do not match
            throw new Error("Passwords don't match");
        } else {
            return value;
        }
    }),

    ];


module.exports = validationBodyRules;