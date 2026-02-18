var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
const cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const dragonsRouter = require('./routes/dragons');
const moviesRouter = require('./routes/movies');
const cartRacerRouter = require('./routes/cartracer');
const cookieMonsterRouter = require('./routes/cookiemonster');
const catsRouter = require('./routes/cats');
const carsRouter = require('./routes/cars');


var app = express();
mongoose
.connect("mongodb+srv://admin:adminadmin@cluster0.micxwr8.mongodb.net/?appName=Cluster0")
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dragons', dragonsRouter);
app.use('/movies', moviesRouter);
app.use('/cr', cartRacerRouter);
app.use('/cm', cookieMonsterRouter);
app.use('/cats', catsRouter);
app.use('/cars', carsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
