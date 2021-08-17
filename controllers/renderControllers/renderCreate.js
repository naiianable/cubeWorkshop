let renderCreate = function(req, res) {
    let loggedIn = req.cookies.loggedIn;
    res.render('create', { loggedIn });
};

module.exports = renderCreate;