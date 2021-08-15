const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const renderIndex = require('../controllers/renderControllers/renderIndex');
const renderLogin = require('../controllers/renderControllers/renderLogin');
const renderRegister = require('../controllers/renderControllers/renderRegister');
const renderCreate = require('../controllers/renderControllers/renderCreate');
const renderAbout = require('../controllers/renderControllers/renderAbout');
const renderDetails = require('../controllers/renderControllers/renderDetails');
const renderCreateAcc = require('../controllers/renderControllers/renderCreateAcc');
const renderAttachAcc = require('../controllers/renderControllers/renderAttachAcc');
const renderEdit = require('../controllers/renderControllers/renderEdit');
const renderDelete = require('../controllers/renderControllers/renderDelete');
const render404 = require('../controllers/renderControllers/render404');

const postCreate = require('../controllers/postControllers/postCreate');
const postCreateAcc = require('../controllers/postControllers/postCreateAcc');
const postAttach = require('../controllers/postControllers/postAttach');
const postRegister = require('../controllers/postControllers/postRegister');


module.exports = (app) => {
    //getting all the routes working for express.js
    app.get('/', renderIndex);

    app.get('/login', renderLogin);

    app.get('/register', renderRegister);
       
    app.get('/create', renderCreate);

    app.get('/about', renderAbout);

    //grabbing details from specific id of cube
    app.get('/details/:id', renderDetails);

    app.get('/create/accessory', renderCreateAcc);

    app.get('/attachAccessory/:id', renderAttachAcc);

    app.get('/editCubePage/:id', renderEdit);

    app.get('/deleteCubePage/:id', renderDelete);

    // '/*' means 'every other page, render this one' 
    app.get('/*', render404);

    app.post('/create', postCreate);

    app.post('/create/accessory', postCreateAcc);

    app.post('/attachAccessory/:id', postAttach);

    app.post('/register', postRegister);
};