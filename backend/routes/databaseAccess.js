// Importing needed npm packages
const express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Set up bodyparser to enable access to POST key values
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Import User and Idea model
let User = require('../models/User.js');
let Idea = require('../models/Idea.js');

// Check if user is in system, if so login
app.get('/login', (req, res) => {
    console.log("got to login");
  User.find({email: req.body.email, password: req.body.password}).catch(error => {
    res.send(error);
  }).then(response => {
      console.log("user exists!");
    res.send({user: response});
  })
});

// Pull all ideas from database
app.get('/ideas', (req, res) => {
  Idea.find().catch(error => {
    res.send(error);
  }).then(response => {
    res.send({ideas: response});
  })
});

// Create new user with creds
app.post('/signup', (req, res) => {
  const newUser = new User({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      password: req.body.password,
      hasTeam: req.body.hasTeam,
      bio: req.body.bio
  });

  newUser.save().then(response => {
    res.send(response);
  }).catch(error => {
    res.send(error);
  })
});

// Post new idea
app.post('/idea', (req, res) => {
    const newIdea = new Idea({
        name: req.body.name,
        description: req.body.description,
        hashtags: req.body.hashtags
    });

    newIdea.save().then(response => {
      res.send(response);
    }).catch(error => {
      res.send(error);
    })

});

module.exports = app;
