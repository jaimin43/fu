const express = require('express');

const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
var app = express();


app.use(express.static('public'));

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));



// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));

app.listen(5000,function(){
    console.log("connectd");
})