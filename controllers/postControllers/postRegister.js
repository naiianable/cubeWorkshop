const User = require('../../models/User');

let postRegister = function(req, res) {
    //console.log(req);
    
    let newUser = new User(req.body);
    let userPass = newUser.password;
    let userPassRepeat = newUser.repeatPassword;
    const saltRounds = 9;
    console.log(req);
    
    // checking that password and repeat password are the same
    if(userPass === userPassRepeat) {

        //hashing user password with bcrypt
        bcrypt.hash(userPass, saltRounds, function(err, hash) {
            //console.log(hash);
            newUser.password = hash;

            newUser.save(function(err, user) {
                if (err) return console.error(err);
            });

            res.redirect('/register');
        });
    } else {
        res.redirect('/register');
    }
    
};

module.exports = postRegister;