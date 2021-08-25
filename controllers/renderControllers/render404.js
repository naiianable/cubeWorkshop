let render404 = function(req, res) {
    let loggedIn = req.cookies.loggedIn;
    res.render('404', { loggedIn });
};

module.exports = render404;