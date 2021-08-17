let renderCreateAcc = function(req, res) {
    let loggedIn = req.cookies.loggedIn;
    res.render('createAccessory', { loggedIn });
};

module.exports = renderCreateAcc;