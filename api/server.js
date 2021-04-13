'use strict';
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
/**
 * { app initialised }
 *
 */
var app = express();

/**
 * { set app properties }
 *
 */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'user._id' }));
app.use(express.static(path.join(__dirname, './../admin')));
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Headers", 'Content-Type,Accept');
  next();
});


app.get('*', function(req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, './../admin') });
});
/**
 * { catch 404 and forward to error handler }
 *
 */
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var port = process.env.PORT || 9000; // set our port

/**
 * { START THE SERVER }
 *
 */
app.listen(port,function() {
	console.log('server is running on port',port);
});

module.exports = app;
