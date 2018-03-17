// Importing needed npm packages
const express = require('express');
var fs = require('fs');
var path = require('path');
const app = express();
var mongoose = require('mongoose');
const dbRoutes = require('./routes/databaseAccess.js');
var bodyParser = require('body-parser');
const compress = require('compression');

// Makes the build folder publicly available
app.use(express.static('build'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/db', dbRoutes);

// Set /build as our static content directory
const publicPath = path.join(__dirname, 'build');


// Point the app to our static assets
app.use(express.static(publicPath));

// Automatically gzip compresses all of our HTTP body data
app.use(compress());



// Checks the env.sh file exists
if (!fs.existsSync('./env.sh')) {
  throw new Error('env.sh file is missing');
}

// Sets up app to use Mongoose (with MongoDB)
if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not in the environmental variables. Try running 'source env.sh'");
}

mongoose.connection.on('connected', function() {
  console.log('Success: connected to MongoDb!');
});

mongoose.connection.on('error', function() {
  console.log('Error connecting to MongoDb. Check MONGODB_URI in env.sh');
  process.exit(1);
});

mongoose.connect(process.env.MONGODB_URI);

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});

module.exports = app;
