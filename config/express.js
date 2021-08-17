const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//require('dotenv').config();


module.exports = (app) => {
    
    //TODO: Setup the view engine
    
    // app.set('view engine', 'hbs');
    // app.engine('handlebars', handlebarThing());
    // app.set('views', __dirname + '/views');

    app.set("view engine", "hbs");
    app.engine(
	"hbs",
	exphbs({
		extname: "hbs",
		defaultLayout: "",
        //layout of the page is in a folder in /views
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views",
	})
);

    //TODO: Setup the body parser
    //WHAT IS A BODY PARSER????
    app.use(bodyParser.urlencoded({ extended: true }));

    //allows me to access cookies in browser using req.cookies
    app.use(cookieParser());

    //TODO: Setup the static files
    app.use(express.static('static'));

};

// // View Engine Setup

// app.set('views', path.join(__dirname, 'views')); // setting folder for public files

// // register the partials, hint if it says module not found after you do this, its because the module most likely isn't there! Import it! 

// hbs.registerPartials(__dirname + '/views/partials'); 

// // setting view engine to hbs, engine compiles views and data into HTML

// app.set('view engine', 'hbs');

