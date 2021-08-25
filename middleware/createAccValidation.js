const { body, validationResult } = require('express-validator');

let validationBodyRules = [
    //do checks here
    body('name', 'Cube name needs to be at least 5 characters')
    .trim()
    .notEmpty()
    .matches(/[A-Za-z,;'\"\s.!?]+/)
    .isLength({min: 5}, {max: 30}),

    body('description', 'Description needs to be at least 20 characters')
    .trim()
    .notEmpty()
    .matches(/[A-Za-z,;'\"\s.!?]+/)
    .isLength({min: 20}),

    body('imageUrl', 'Image url not valid')
    .trim()
    .notEmpty()
    .isURL()
        
    ];

    module.exports = validationBodyRules;