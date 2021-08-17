const env = process.env.NODE_ENV || 'development';
const mongoose = require('mongoose');
const config = require('./config/config')[env];
const app = require('express')();

require('dotenv').config();
require('./config/express')(app);
require('./config/routes')(app);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cubes.nrxqz.mongodb.net/cubeWorkshop?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected!');
});


app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));