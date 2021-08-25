const { body, validationResult } = require('express-validator');
const validator = require('validator');



 let validationBodyRules = [
    //do checks here
    body('username', 'Username Invalid')
    .isLength({ min: 5 })
    .matches(/[A-z\d]+/),

    body('password', 'Password Invalid')
    .isLength({ min: 8 })
    .matches(/[A-z\d]+/),

    body('repeatPassword', 'Passwords do not match!')
    .equals('password'),
];

module.exports = validationBodyRules;