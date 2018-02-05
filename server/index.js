const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    massive = require('massive'),
    port = 3005;

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(session({
    secret: process.env.PASS_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());

massive(process.env.MASSIVE_STRING).then((db)=>{
    app.set('db', db);
    console.log('massive connected');
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function(acessToken, refreshToken, extraParams, profile, done){
    app.get('db').find_user([profile._json.identities[0].user_id]).then((user)=>{
        if(user[0]){
            return done(null, user[0].user_id);
        } else {
            app.get('db').create_user([profile._json.given_name, profile._json.family_name, profile._json.email, profile._json.picture, profile._json.identities[0].user_id, profile._json.given_name]).then( user => {
                return done(null, user[0].user_id);
            });
        }
    })
}))

passport.serializeUser(function(id, done){
    done(null, id);
})
passport.deserializeUser(function(id, done){
    app.get('db').find_session_user([id]).then( user => {
        done(null, user[0]);
    });
})


app.get("/api/auth/logout", (req, res) => {
    req.logOut(); //built in method that destroys the session
    res.redirect('/');
});

app.get('/api/auth0/auth', passport.authenticate('auth0'));

app.get('/api/auth0/callback', passport.authenticate('auth0', {
    successRedirect: process.env.AUTH_REDIRECT,
    failureRedirect: process.env.AUTH_FAIL
}))



app.listen(port, ()=> console.log('Listening on port: ' + port + ', Start Date: ' + Date(Date.now())));