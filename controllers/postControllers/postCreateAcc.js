const Accessory = require('../../models/Accessory');

let postCreateAcc = function(req, res) {
    //console.log('THIS IS THE REQUEST.BODY', req.body);
    //req.body = parsed json data from body parser in express.js
    //putting it into cube schema
    let newAccessory = new Accessory(req.body);
    
    newAccessory.save(function (err, newAccessory) {
        if (err) return console.error(err);
        
      });
    res.redirect('/');
};

module.exports = postCreateAcc;
