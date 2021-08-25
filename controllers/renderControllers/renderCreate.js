const { body, validationResult } = require('express-validator');

let renderCreate = function(req, res) {
    
    let loggedIn = req.cookies.loggedIn;
    let error = req.cookies.errorMsg;
    
    console.log(error);
    if(!error) {
       res.render('create', { loggedIn }); 
    } else {
        res.clearCookie('errorMsg'); 
        let errorDisplay = error.errors[0].msg;
        res.render('create', { loggedIn, errorDisplay });
    }
    
};

module.exports = renderCreate;