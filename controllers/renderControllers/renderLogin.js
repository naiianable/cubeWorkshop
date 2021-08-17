

let renderLogin = function(req, res) {
    let loggedIn = req.cookies.loggedIn;
    res.render('loginPage', { loggedIn });
};

module.exports = renderLogin;