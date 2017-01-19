require('colors');

var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan')('dev'),
    mongoose = require('mongoose').connect('mongodb://localhost/authentication', (mongooseErr) => {
        if( mongooseErr ) {
            console.error('#ERROR#'.red,'Could not initilize mongoose!', mongooseErr);
        } else {
            console.info('Mongoose initilized!'.green.bold);
        }
    }),
    sessions = require('client-sessions')({
        cookieName: 'auth',       // front-end cookie name - might want to change
        secret: 'DR@G0N$',        // the encryption password : keep this safe
        requestKey: 'session',    // req.session,
        duration: (86400 * 1000) * 7, // one week in milliseconds
        cookie: {
            ephemeral: false,     // when true, cookie expires when browser is closed
            httpOnly: true,       // when true, the cookie is not accesbile via front-end JavaScript
            secure: false         // when true, cookie will only be read when sent over HTTPS
        }
    }), // encrypted cookies!
    PORT = process.env.PORT || 1337,
    Routes = require('./routes'),
    app = express();

app.use(
    express.static("public"),
    logger,
    sessions,
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
  (req, res, next) =>{
    console.log(`SESSION : `, `${req.session.uid}`.rainbow);
    next();
  }
);

Routes(app);

app.listen(PORT, (err) => {
    if( err ) {
        console.error('#ERROR#'.red,'Could not start server! :(');
    } else {
        console.log('\nMEAN Auth Server UP!'.cyan.bold, 'PORT:'.yellow, PORT);
    }
});