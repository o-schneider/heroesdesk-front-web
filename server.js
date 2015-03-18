var express = require('express');
var browserify = require('browserify-middleware');
var less = require('less-middleware');

var webAppPath = __dirname + '/www';

var app = express();

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(less(webAppPath));
app.use('/js', browserify('./www/app'));
app.use('/', express.static(webAppPath));

app.listen(8080);
