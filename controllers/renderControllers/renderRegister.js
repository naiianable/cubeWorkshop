let renderRegister = function(req, res) {
    let loggedIn = req.cookies.loggedIn;
    res.render('registerPage', { loggedIn });
};

module.exports = renderRegister;