const express = require('express');
const app = express();
var cookieParser = require('cookie-parser')
var passport = require('passport')
var bodyParser = require('body-parser');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy
var path = require('path');
var morgan = require('morgan')
const db = require('./config/db');
const userRouter = require('./routes/userRouter')
const favRouter = require('./routes/favRouter')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'))
app.use('/users',userRouter)
app.use('/favourites',favRouter)

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(session({ secret: "passport" }))
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user.id);
  }); /* esta funcion esta serializando el usuario=> como guardo el usuario*/

passport.deserializeUser(function(id, done) {
    User.findById(id)
      .then(user => done(null, user))
  }); /* esta funcion esta deserializando el usuario => como veo el usuario*/


  // ESTRATEGIA DE AUTORIZACION
passport.use(new LocalStrategy({ usernameField: 'email' },
function(email, password, done) {
  User.findOne({ email })
    .then(function (user) {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    })
    .catch(done);
}
));

var port = 3000

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
});

db.sync({ force: false }).then((con) => {
    console.log(`${con.options.dialect} database ${con.config.database} connected at ${con.config.host}:${con.config.port}`)
    app.listen(port, () => console.log('SERVER LISTENING AT PORT',port))
  })