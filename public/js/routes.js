var Auth = require('./controllers/auth'),
    express = require('express');

module.exports = (app) => {
    app.get('/logout', Auth.logout);        // logout route + redirect

    app.post('/login', Auth.login);         // login form submission
    app.post('/register', Auth.register);   // register form submission

    app.get('/dashboard.html', Auth.session);
    app.use(express.static('public'));
};