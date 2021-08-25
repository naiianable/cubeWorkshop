const Accessory = require('../../models/Accessory');
const { body, validationResult } = require('express-validator');

let postCreateAcc = function(req, res) {
    //console.log('THIS IS THE REQUEST.BODY', req.body);
    //req.body = parsed json data from body parser in express.js
    //putting it into cube schema
    let newAccessory = new Accessory(req.body);

    let errors = validationResult(req);

    console.log(errors);
    if(!errors.isEmpty()) {
      res.cookie('errorMsg', errors);
      res.redirect('accessory');
    } else {
      newAccessory.save(function (err, newAccessory) {
        if (err) return console.error(err);
        
      });
      res.redirect('/');
    }
    
    
};

module.exports = postCreateAcc;
