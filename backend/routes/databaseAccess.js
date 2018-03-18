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
  User.find({email: req.body.email, password: req.body.password}).catch(error => {
    res.send(error);
  }).then(response => {
    res.send({user: response});
  })
});

// Pull all ideas from database
app.get('/ideas', (req, res) => {
  Idea.find({}, function(err, ideas) {
      let ideaList = [];
      ideas.forEach(function(idea) {
          ideaList.push(idea);
      })
      res.send({ideas: ideaList});
  }).catch(error => {
    res.send(error);
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
