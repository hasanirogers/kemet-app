var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

var routes = require('./routes/index'),
    templates = require('./routes/templates');

var app = express();

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

if (env == 'development') {
    app.use(express.static(path.join(__dirname, 'app')));
} else {
    app.use(express.static(path.join(__dirname, 'build/es5-bundle/app')));;
}
app.use('/bower_components', express.static(path.join(__dirname, 'app/bower_components')));
app.use('/templates', templates);

module.exports = app;
