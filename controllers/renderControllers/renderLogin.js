const { body, validationResult } = require('express-validator');

let renderLogin = function(req, res) {
    let loggedIn = req.cookies.loggedIn;
    let error = req.cookies.errorMsg;

    if(!error) {
        res.render('loginPage', { loggedIn });
    } else {
        res.clearCookie('errorMsg');
        let errorDisplay = error.errors[0].msg;
        res.render('loginPage', { loggedIn, errorDisplay });
    }
    
};

module.exports = renderLogin;