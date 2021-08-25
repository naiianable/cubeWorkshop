const { body, validationResult } = require('express-validator');

let renderRegister = function(req, res) {
    res.clearCookie('errorMsg');
    let loggedIn = req.cookies.loggedIn;

    let error = req.cookies.errorMsg;
    if(!error) {
        res.render('registerPage', { loggedIn });
    } else {
        let errorDisplay = error.errors[0].msg;

        console.log(errorDisplay);
        res.render('registerPage', { loggedIn, errorDisplay });

        
    }
    
};

module.exports = renderRegister;