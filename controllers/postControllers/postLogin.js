const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


let postLogin = async function(req, res) {
    //console.log('THIS IS THE REQ', req);
    let user = req.body.username;
    let plainTextPass = req.body.password;

    let loginUser = await User.findOne({ username: user }).lean();

    let userId = loginUser._id;
    let userName = loginUser.username;
    let userHashPass = loginUser.password;


    bcrypt.compare(plainTextPass, userHashPass).then(function(result) {
        if(result == true) {
            const payload = { userId, userName };
            const secret = process.env.MYSECRET;
            const options = { expiresIn: '60m' };

            var token = jwt.sign(payload, secret, options);

            var decoded = jwt.verify(token, secret);

            console.log('THIS IS THE TOKEN', token);
            console.log('DECODED TOKEN', decoded);

            //creating cookie with token as value
            res.cookie('token', token, { httpOnly: true, maxAge: 10000 * 10000});
            res.cookie('loggedIn', true, { maxAge: 10000 * 10000 });
            //  console.log('THIS IS THE REQ', req);
        
            res.redirect('/'); 
        } else {
            console.log('try again');
            res.redirect('/login');
        }

    });

   
};

module.exports = postLogin;