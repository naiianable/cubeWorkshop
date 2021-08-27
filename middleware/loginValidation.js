const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const validator = require('validator');

    let validationBodyRules = [
    //do checks here
    body('username', 'Username Invalid')
    .trim()
    .notEmpty()
    .isAlphanumeric()
    .isLength({ min: 5 })
    .custom(value => {
        return User.findOne({username: value}).then(user => {
          if (!user) {
            return Promise.reject('Username does not exist');
          }
        });
    }),
    

    body('password', 'Password Invalid')
    .trim()
    .notEmpty()
    .isAlphanumeric()
    .isLength({ min: 8 }),

    ];


module.exports = validationBodyRules;