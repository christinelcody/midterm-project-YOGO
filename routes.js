var Auth = require('./controllers/auth');
var Studios = require('./controllers/Studios.js');
var Studio = require('./models/studios.js');
    express = require('express');

module.exports = (app) => {
    app.get('/', function(req, res){
      res.sendFile("index.html", {root: './public/HTML'})
    })
    app.get('/logout', Auth.logout);        // logout route + redirect

    app.post('/login', Auth.login);         // login form submission
    app.post('/register', Auth.register);   // register form submission

    app.get('/dashboard.html', Auth.session);
    app.use(express.static('public'));
  
    app.post('/searchYoga', Studios.get); 
    
}