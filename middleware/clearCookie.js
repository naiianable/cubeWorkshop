
module.exports = function(req, res, next) {
    res.clearCookie('errorMsg');
    next();
};