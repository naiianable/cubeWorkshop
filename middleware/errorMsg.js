const { body, validationResult } = require('express-validator');

module.exports = function(req, res, next) {
    console.log('THIS IS VALIDATOR BODY ERRORS', validationResult(req));

    let errorMsg = validationResult(req).errors[0].msg;
    let errors = validationResult(req);
    if(!errors.isEmpty()) {
        next();
    } else {
        res.render({ errorMsg });
    }

    next();
};