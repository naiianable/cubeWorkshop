const User = require('../../models/User');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

let postRegister = function(req, res) {
    //console.log(req);
    
    let newUser = new User(req.body);
    let userPass = req.body.password;
    let userPassRepeat = req.body.repeatPassword;
    const saltRounds = 9;

    //console.log('THIS IS THE BODY', req.body);
    
    
    // checking that password and repeat password are the same
    let errors = validationResult(req);
    
    if(!errors.isEmpty()) {
        console.log(errors)
        res.cookie('errorMsg', errors);
        res.redirect('/register');
    } else if(errors.isEmpty()) {
        //hashing user password with bcrypt
        bcrypt.hash(userPass, saltRounds, function(err, hash) {
            newUser.password = hash;

            newUser.save(function(err, user) {
                if (err) return console.error(err);
            });

            console.log('THIS IS ERRORS', errors);

            res.redirect('/login');
        });
        
            
    }
    
};

module.exports = postRegister;