let renderCreateAcc = function(req, res) {
    let loggedIn = req.cookies.loggedIn;
    let error = req.cookies.errorMsg;
    
    console.log(error);
    if(!error) {
       res.render('createAccessory', { loggedIn }); 
    } else {
        res.clearCookie('errorMsg'); 
        let errorDisplay = error.errors[0].msg;
        res.render('createAccessory', { loggedIn, errorDisplay });
    }
    
};

module.exports = renderCreateAcc;