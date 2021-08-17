const User = require('../../models/User');
const bcrypt = require('bcrypt');

let postRegister = function(req, res) {
    //console.log(req);
    
    let newUser = new User(req.body);
    let userPass = req.body.password;
    let userPassRepeat = req.body.repeatPassword;
    const saltRounds = 9;
    console.log(req.body);
    
    // checking that password and repeat password are the same
    if(userPass === userPassRepeat) {

        //hashing user password with bcrypt
        bcrypt.hash(userPass, saltRounds, function(err, hash) {
            newUser.password = hash;

            newUser.save(function(err, user) {
                if (err) return console.error(err);
            });

            res.redirect('/login');
        });
    } else {
        //console.log('not working')
        res.redirect('/register');
    }
    
};

module.exports = postRegister;