let renderAbout = function(req, res) {
    let loggedIn = req.cookies.loggedIn;
    res.render('about', { loggedIn });
};

module.exports = renderAbout;